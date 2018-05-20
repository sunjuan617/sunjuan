    //获取cookie
   	//第一步思路：将商品的id和数量存放的cookie和数据库里面。
	//第二步思路：定义两个数组接收存放的数量和id,提前约定存放cookie的名称。
			var sidarr = [];
			var numarr = [];
			function getcookievalue(){
				if(getCookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=getCookie('cartsid').split(',');
				}
				
				if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=getCookie('cartnum').split(',');
				}
			}
			
			//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
			//如果存在，已经在购物车里面了，否则将商品sid添加到cookie里面
			$('.p-btn a').on('click', function() {
				var sid = $(this).parents('.wrap').find('.loadimg').attr('sid');//当前按钮对应图片的sid
				  getcookievalue();//获取商品的id和数量,放到对应的数组中,利用数组进行匹配
				if ($.inArray(sid, sidarr) != -1) {//是否存在cookie中
					//将之前的数据和当前存的数据相加，存放cookie里面
					if(getCookie('cartnum')==''){
						var num=parseInt($('#count').val());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
						sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
        				addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
					}else{
						var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('#count').val());
						numarr[$.inArray(sid,sidarr)]=num;
						addCookie('cartnum', numarr.toString(), 7);//修改后的结果
					}
					
				}else{//不存在
					sidarr.push(sid);//将当前id添加到数组里面。
        			addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        			numarr.push($('#count').val());//存放输入的数量，默认是1
        			addCookie('cartnum', numarr.toString(), 7);
				}
			});
//倒计时
function double(n){
				return n<10?'0'+n:n;
			}
			function djs(){
			var ftime=new Date(2018,6,1,18,0,0);
			var ntime=new Date();
			var time=parseInt((ftime-ntime)/1000)//结果为秒
			var day=parseInt(time/86400);
			var hour=parseInt(time%86400/3600);
			var minu=parseInt(time%3600/60);
			var sec=parseInt(time%60);//取模
			$('.goods-price-c2').html(day+'天'+double(hour)+'时'+double(minu)+'分'+double(sec)+'秒');			
		}
		djs();
		setInterval(djs,1000);
$('.specArea li').on('click',function(){
	$(this).css('border-color','red').siblings().css('border-color','#ccc');
})
//放大镜
    //切换图片
     $('.ulist img').mouseover(function() {
	    $(this).addClass("current").siblings().removeClass("current");
	     var src = $(this).attr("src");
	     var sid = $(this).attr("sid");
	     $(".loadimg").attr("src", src);
	     $(".loadimg").attr("sid",sid);
	     $("#bpic").attr("src", src);
  });
   
   //1.获取元素
			var scale=$('.wrap').get(0);
			var smallpic=$('#spic').get(0);
			var samllscale=$('#sf').get(0);
			var bigscale=$('#bf').get(0);
			var bigpic=$('#bpic').get(0);
			
			//2.鼠标经过小图显示小放和大放。
			smallpic.onmouseover=function(){
				samllscale.style.visibility='visible';
				bigscale.style.visibility='visible';
				
				//3.求小放的宽高
				//公式：小放/大放=小图/大图
				samllscale.style.width=bigscale.offsetWidth*smallpic.offsetWidth/bigpic.offsetWidth+'px';
				samllscale.style.height=bigscale.offsetHeight*smallpic.offsetHeight/bigpic.offsetHeight+'px';
				
				//5.求比例>1
				var bili=bigpic.offsetWidth/smallpic.offsetWidth;
				
				//4.让小放跟随鼠标移动
				this.onmousemove=function(ev){
					var ev=ev||window.event;
					var l=ev.clientX-scale.offsetLeft-samllscale.offsetWidth/2;
					var t=ev.clientY-scale.offsetTop-samllscale.offsetHeight/2;
					if(l<0){
						l=0;
					}else if(l>=smallpic.offsetWidth-samllscale.offsetWidth-2){
						l=smallpic.offsetWidth-samllscale.offsetWidth-2;
					}
					
					if(t<0){
						t=0;
					}else if(t>=smallpic.offsetHeight-samllscale.offsetHeight-2){
						t=smallpic.offsetHeight-samllscale.offsetHeight-2;
					}
					samllscale.style.left=l+'px';
					samllscale.style.top=t+'px';
					//6.赋值，注意方向
					bigpic.style.left=-bili*l+'px';
					bigpic.style.top=-bili*t+'px';
				}
				
			}
			smallpic.onmouseout=function(){
				samllscale.style.visibility='hidden';
				bigscale.style.visibility='hidden';
			}