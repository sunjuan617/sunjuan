
//2.根据cookie值，创建一个商品列表的函数
function createcart(sid, num) {//sid：图片的编号  num:商品的数量
    $.ajax({
        url: '../php/cart.json',
        dataType: 'json'
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {//图片的sid和数据里面的sid匹配
                var $clone = $('.goods-item:hidden').clone(true);//对隐藏的模块进行克隆
                //都是赋值
                $clone.find('.goods-pic').find('img').attr('src', data[i].img);
                $clone.find('.goods-pic').find('img').attr('sid', data[i].sid);
                $clone.find('.goods-d-info').find('a').html(data[i].title);
                $clone.find('.b-price').find('strong').html(data[i].price);
                $clone.find('.quantity-form').find('input').val(num);
                //计算价格,每个商品的价格
                var $dj1 = parseFloat($clone.find('.b-price strong').html());//获取单价
                $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));//num：数量
                $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
                $('.item-list').append($clone);//追加
                kong();//购物车是否为空
                totalprice();//总价和总数
            }
        }
    });
}

//3.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(',');//存放sid数组
    var n = getCookie('cartnum').split(',');//存放数量数组
    for (var i = 0; i < s.length; i++) {
        createcart(s[i], n[i]);//遍历创建商品列表
    }
}

//4.商品列表(cookie)不存在，购物车为空
kong();
function kong() {
    if (getCookie('cartsid')) {//cookie存在，有商品，购物车不再为空
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}

//5.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的数量
    $('.goods-item:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.b-sum strong').html());
            countnum += parseInt($(this).find('.quantity-form').find('input').val());
        }
    });
    //赋值
    $('.totalprice').html('￥' + total.toFixed(2));
    $('.amount-sum em').html(countnum);
}

//6.修改数量的操作
//改变商品数量++
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.quantity-down').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//直接输入改变数量
$('.quantity-form input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

//7.计算数量改变后单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
    return ($dj * $cnum).toFixed(2);
}

//8.获取对应的cookie值，将其转换成数组
var sidarr = [];
var numarr = [];
function cookieToArray(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}
}


//9.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.goods-item').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
    addCookie('cartnum', numarr.toString(), 7);
}


//10.删除
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.item-list').on('click', '.b-action a', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
   	 $(this).first().parents('.goods-info').remove();
   }
    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除全部商品的函数
$('.operation a:first').on('click', function() {
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});




////1.推荐商品的数据。
//$.ajax({
//	url: 'json/cart.json',//接口
//  dataType: 'json'//数据的类型
//}).done(function(data){//data:接口的返回的数据
//	var $html = '';
//  for (var i = 0; i < 4; i++) {
//      $html += '<li>' +
//          '<div class="goodsinfo">' +
//          '<div class="p-img">' +
//          '<a href="##"><img class="loadimg" src="' + data[i].img + '" alt="" sid="' + data[i].sid + '" /></a>' +
//          '</div>' +
//          '<div class="p-name">' +
//          '<a class="loadt" href="##">' + data[i].title + '</a>' +
//          '</div>' +
//          '<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + data[i].price + '</i></strong></div>' +
//          '<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>' +
//          '</div>' +
//          '</li>';
//  }
//  $('.goods-list ul').html($html);//将数据追加到商品列表
//});
//
//
////购物车的思路
////每张图片都有sid，存放到cookie里面的是图片的sid和商品数量
////将每个产品的信息放置到数据里面。
//
////cookie自定义key值   cartsid 存放sid  cartnum 存放数量
//
////如果sid存在cookie里面，已经创建了商品列表，数量累加，否则就是第一次操作，创建商品列表
//
////3.获取cookie，cookie多个sid，多个商品数量，采用数组的形式存储。
////存储cookie的sid和数量
//var sidarr = [];
//var numarr = [];
//function getcookievalue(){
//	if(getCookie('cartsid')){
//		sidarr=getCookie('cartsid').split(',');
//	}
//	
//	if(getCookie('cartnum')){
//		numarr=getCookie('cartnum').split(',');
//	}
//}
//
////2.给加入购物车按钮添加对应的事件，判断当前的按钮对应的图片的sid是否存在于cookie里面
////2.委托原理获取商品列表的添加购物车按钮
//$('.goods-list ul').on('click', '.p-btn a', function() {
//	var sid = $(this).parents('.goodsinfo').find('.loadimg').attr('sid');//当前按钮对应图片的sid
//	getcookievalue();//获取cookie值，放到对应的数组中
//	if ($.inArray(sid, sidarr) != -1) {//存在，数量加1
//		$('.goods-item:visible').each(function() {//遍历可视的商品列表
//          if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
//              var $num = $(this).find('.quantity-form input').val();//获取数量的值
//              $num++;//数量累加
//              $(this).find('.quantity-form input').val($num);//将数量赋值回去
//              //计算价格
//              var $dj = parseFloat($(this).find('.b-price strong').html());//获取当前的单价
//              $(this).find('.b-sum strong').html(($dj * $num).toFixed(2));//计算商品总价
//
//              //存储数量到cookie里面。通过编号找数量
//              numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
//              addCookie('cartnum', numarr.toString(), 7);//添加购物车
//              totalprice();
//          }
//      });
//	}else{//当前商品列表没有进入购物车，创建商品列表
//		sidarr.push(sid);//将当前id添加到数组里面。
//      addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
//      numarr.push(1);//走这里数量都是1.
//      addCookie('cartnum', numarr.toString(), 7);
//      createcart(sid, 1);
//      totalprice();
//	}
//});
//
//
//
////4.创建一个商品列表的函数
//function createcart(sid, num) {//sid：图片的编号  num:商品的数量
//  $.ajax({
//      url: 'json/cart.json',
//      dataType: 'json'
//  }).done(function(data) {
//      for (var i = 0; i < data.length; i++) {
//          if (sid == data[i].sid) {//图片的sid和数据里面的sid匹配
//              var $clone = $('.goods-item:hidden').clone(true);//对隐藏的模块进行克隆
//              //都是赋值
//              $clone.find('.goods-pic').find('img').attr('src', data[i].img);
//              $clone.find('.goods-pic').find('img').attr('sid', data[i].sid);
//              $clone.find('.goods-d-info').find('a').html(data[i].title);
//              $clone.find('.b-price').find('strong').html(data[i].price);
//              $clone.find('.quantity-form').find('input').val(num);
//              //计算价格
//              var $dj1 = parseFloat($clone.find('.b-price strong').html());
//              $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));
//              $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
//              $('.item-list').append($clone);//追加
//              kong()
//              totalprice();
//          }
//      }
//  });
//}
//
////5.页面加载检测购物车中是否有数据，有的话创建商品列表
//if (getCookie('cartsid') && getCookie('cartnum')) {
//  var s = getCookie('cartsid').split(',');//存放sid数组
//  var n = getCookie('cartnum').split(',');//存放数量数组
//  for (var i = 0; i < s.length; i++) {
//      createcart(s[i], n[i]);//遍历创建商品列表
//  }
//}
//
////6.商品列表不存在显示购物车为空
//
//kong()
//
//function kong() {
//  if (getCookie('cartsid')) {
//      $('.empty-cart').hide();
//  } else {
//      $('.empty-cart').show();
//  }
//}
//
//
//
//
////7.计算总价
//totalprice();
//
//function totalprice() {//计算总价
//  var total = 0;
//  var countnum = 0;
//  $('.goods-item:visible').each(function() {//显示出来的
//      if ($(this).find('input:checkbox').is(':checked')) {//复选框是选中的
//          total += parseFloat($(this).find('.b-sum strong').html());
//          countnum += parseInt($(this).find('.quantity-form').find('input').val());
//      }
//  });
//  $('.totalprice').html('￥' + total.toFixed(2));
//  $('.amount-sum em').html(countnum);
//}
//
//
//
////8.全选
//$('.allsel').on('change', function() {
//  $('.goods-item:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
//  $('.allsel').prop('checked', $(this).prop('checked'));
//  totalprice();
//});
//
//var $inputchecked = $('.goods-item:visible').find('input:checkbox');//获取委托元素
//$('.item-list').on('change', $inputchecked, function() {
//  var $inputs = $('.goods-item:visible').find('input:checkbox'); //放内部
//  if ($('.goods-item:visible').find('input:checked').length == $inputs.size()) {
//      $('.allsel').prop('checked', true);
//  } else {
//      $('.allsel').prop('checked', false);
//  }
//  totalprice();
//});
//
//
////9.删除商品列表
////删除cookie的函数
//function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
//  var index = -1;
//  for (var i = 0; i < sidarr.length; i++) {
//      if (sid == sidarr[i]) {
//          index = i;
//      }
//  }
//  sidarr.splice(index, 1);//删除数组对应的值
//  numarr.splice(index, 1);//删除数组对应的值
//  addCookie('cartsid', sidarr.toString(), 7);//添加cookie
//  addCookie('cartnum', numarr.toString(), 7);
//}
//
////删除单个商品的函数(委托)
//$('.item-list').on('click', '.b-action a', function(ev) {
//  cookieToArray(); //转数组
//  $(this).first().parents('.goods-info').remove();
//  delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
//  totalprice();
//});
//
//
////删除全部商品的函数
//$('.operation a:first').on('click', function() {
//  $('.goods-item:visible').each(function() {
//      if ($(this).find('input:checkbox').is(':checked')) {
//          $(this).remove();
//          delgoodslist($(this).find('img').attr('sid'), sidarr);
//      }
//  });
//  totalprice();
//});
//
////10.修改数量的操作
////改变商品数量++
//$('.quantity-add').on('click', function() {
//  var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
//  $count++;
//  if ($count >= 99) {
//      $count = 99;
//  }
//  $(this).parents('.goods-item').find('.quantity-form input').val($count);
//  $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
//  totalprice();
//  setcookie($(this));
//
//});
//
//
////改变商品数量--
//$('.quantity-down').on('click', function() {
//  var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
//  $count--;
//  if ($count <= 1) {
//      $count = 1;
//  }
//  $(this).parents('.goods-item').find('.quantity-form input').val($count);
//  $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
//  totalprice();
//  setcookie($(this));
//});
//
//
////直接输入改变数量
//$('.quantity-form input').on('input', function() {
//  var $reg = /^\d+$/g; //只能输入数字
//  var $value = parseInt($(this).val());
//  if ($reg.test($value)) {
//      if ($value >= 99) {//限定范围
//          $(this).val(99);
//      } else if ($value <= 0) {
//          $(this).val(1);
//      } else {
//          $(this).val($value);
//      }
//  } else {
//      $(this).val(1);
//  }
//  $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
//  totalprice();
//  setcookie($(this));
//});
//
//
//
////11.计算单个商品的价格
//function singlegoodsprice(row) { //row:当前元素
//  var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
//  var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
//  return ($dj * $cnum).toFixed(2);
//}
//
//
////12.将改变后的数量的值存放到cookie
//function setcookie(obj) { //obj:当前操作的对象
//  cookieToArray();
//  var $index = obj.parents('.goods-item').find('img').attr('sid');
//  numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
//  addCookie('cartnum', numarr.toString(), 7);
//}
