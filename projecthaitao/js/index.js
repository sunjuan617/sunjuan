 $.ajax({
　　　　　　　url:'http://127.0.0.1/dashboard/projecthaitao/php/tab.php',
　　　　　  　type:'get',
        async:true,
		success:function(d){
                   var $data=JSON.parse(d);
					var $newsarr=$data.info1;
					var $tab1arr=$data.info2;
					var $tab2arr=$data.info3;
					var $tab3arr=$data.info4;
					var $tab4arr=$data.info5;
					var $tab5arr=$data.info6;
					var $tab6arr=$data.info7;
					var str1="";
					 $.each( $newsarr,function(index,rel) {
						
						str1+=`<li sid=${$newsarr[index].id}>
                                 <a href="../html/details.html"><img src=${$newsarr[index].src}></a>
                                 <p>${$newsarr[index].title}</p>
                                 <p>${$newsarr[index].price}</p>
                               
					        </li>`;
                    
				        	})
				    $(".hostlist-l").each(function(){
                        $(this).html(str1);
				    })
				   var str2=""; 
				     $.each( $tab1arr,function(index,rel) {
						
						str2+=`<li sid=${$tab1arr[index].id}>
                                 <img src=${$tab1arr[index].src}>
                                 <p>${$tab1arr[index].title}</p>
                                 <p>${$tab1arr[index].price}</p>
                               
					        </li>`;
                    
				        	})
				    $(".tab-c1").each(function(){
                        $(this).html(str2);
				    })
				    
				    var str3=""; 
				     $.each( $tab2arr,function(index,rel) {
						
						str3+=`<li sid=${$tab2arr[index].id}>
                                 <img src=${$tab2arr[index].src}>
                                 <p>${$tab2arr[index].title}</p>
                                 <p>${$tab2arr[index].price}</p>
                               
					        </li>`;
                    
				        	})
				    $(".tab-c2").each(function(){
                        $(this).html(str3);
				    })
				   var str4=""; 
				     $.each( $tab3arr,function(index,rel) {
						
						str4+=`<li sid=${$tab3arr[index].id}>
                                 <img src=${$tab3arr[index].src}>
                                 <p>${$tab3arr[index].title}</p>
                                 <p>${$tab3arr[index].price}</p>
                               
					        </li>`;
                    
				        	})
				    $(".tab-c3").each(function(){
                        $(this).html(str4);
				    })
				   var str5=""; 
				     $.each( $tab4arr,function(index,rel) {
						
						str5+=`<li sid=${$tab4arr[index].id}>
                                 <img src=${$tab4arr[index].src}>
                                 <p>${$tab4arr[index].title}</p>
                                 <p>${$tab4arr[index].price}</p>
                               
					        </li>`;
                    
				        	})
				    $(".tab-c4").each(function(){
                        $(this).html(str5);
				    })
				    var str6=""; 
				     $.each( $tab5arr,function(index,rel) {
						
						str6+=`<li sid=${$tab5arr[index].id}>
                                 <img src=${$tab5arr[index].src}>
                            </li>`;
                        })
				    $(".banner-img ").each(function(){
                        $(this).html(str6);
				    })
				  
		        var str7=""; 
				     $.each( $tab6arr,function(index,rel) {
						
						str7+=`<li sid=${$tab6arr[index].id}>
                                 <img src=${$tab6arr[index].src}>
                            </li>`;
                        })
				    $(".flashsale-c1 ").each(function(){
                        $(this).html(str7);
				    })
				  }
		    
	})
   
//广告遮盖层
$(function(){

		$('.btm-close').click(function(){
			$('.btm-down-layer').hide();
			$('.btm-down').hide();
		})	
});
//
$(".erweima2").hover(function(){
	$(".erweima").show();
	},function(){
		$(".erweima").hide();
  })
//轮播
$(function() {  
    
	    var size = $(".banner-img li").size();  
	  
	    //手动控制轮播效果  
	    $(".banner-img li").eq(0).show();  
	    $(".num li").eq(0).addClass("infoOn");  
	    $(".num li").mouseover(function() {  
	        $(this).addClass("active").siblings().removeClass("active");  
	        var index = $(this).index();  
	        i = index;  
	        $(".banner-img li").eq(index).fadeIn(300).siblings().fadeOut(300);  
	    })  
	  
    //自动  
    var i = 0;  
    var t = setInterval(move, 1500);  
  
    //核心向右的函数  
    function move() {  
        i++;  
        if(i>=6) {  
        	i=0;
         }  
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");  
        $(".banner-img li").eq(i).fadeIn(500).siblings().fadeOut(500);  
  
    }  
    
    //定时器的开始与结束  
    $(".num li").hover(function() {  
        clearInterval(t);  
    }, function() {  
        t = setInterval(move,1500)  
    })  
  
})  
//tab切换
$(function(){
				$('.tab li').on('mouseover',function(){
					$(this).addClass('active').siblings('.tab li').removeClass('active')
					$('.tab-center ul').eq($(this).index()).show().siblings('.tab-center ul').hide()
					
				});
			})
//楼梯导航
 
 	$(function(){
    	   $(window).on('scroll',function(){
          var $scroll=$(this).scrollTop();
            if($scroll>=800){
                $('#loutinav').show();
                $('#nav-dao').show();
            }else{
                $('#loutinav').hide();
                $('#nav-dao').hide();
            }
            //4.拖动滚轮，对应的楼梯样式进行匹配
            $('.louti').each(function(){
                var $loutitop=$('.louti').eq($(this).index()).offset().top+300;
                if($loutitop>$scroll){
                    $('#loutinav li').removeClass('active');
                    $('#loutinav li').eq($(this).index()).addClass('active');
                    return false;//中断循环
                }
            });
        });
        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
         
            $('html,body').animate({
                scrollTop:$loutitop
            })
        });
      
        $('.last').on('click',function(){
            $('html,body').animate({
                scrollTop:0,
            })
        })
        });
//悬浮导航
	$(function(){
    	   $(window).on('scroll',function(){
          var $scroll=$(this).scrollTop();
            if($scroll>=150){
                $('#nav-dao').show();
            }else{
                $('#nav-dao').hide();
            }
            })
    	   })
//登录切换
     $(function(){
				if(getCookie('UserName')){
					$('.login').hide();
					$('.admin').show().find('span').html('你好,'+getCookie('UserName'));
				}
				$('.admin a').on('click',function(){
					delCookie('UserName','',-1);
					$('.admin').hide();
					$('.login').show();
				});
			});

//商品点击购买
     $(function(){
     	 $('.hostlist-l').on('mouseover','img',function(){
     	 	$(this).parents('li').css('border-bottom-color','red').siblings().css('border-bottom-color','#ccc');
     	 })
     	})
