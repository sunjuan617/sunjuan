 $(function(){
                $(".register2").click(function(){
                $("#mid").show();
                $(".register-inner").show();
                });
                $(".close").click(function(){
                $(".register-inner").hide();
                $("#mid").hide();
            });
     
//注册登录切换
    $(".login-r1-c1").click(function(){
    	$(".login-inner").toggle();
    	$(".register-inner").toggle();
    })
     
        });
////注册验证

$(function(){
	var bstop=true;//不通过
	var usereg=/^[a-zA-Z0-9_-]{3,15}$/;
	var bstop1=true;//不通过
	$('#username').on('blur',function(){
		var username=$(this).val();//获取用户名值
		if(username!=''){//检测用户名是否为空
			if(usereg.test(username)){//检测用户名是否满足正则
				//将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
				$.ajax({
					type:'post',
					url:'../php/register.php',
					data:{
						name:username//获取用户名给后端
					},
					success:function(d){
						console.log(d);
						if(d){
							$('#username').next('.text1-error').css('color','red').html('用户名已存在');
							bstop=true;
						}else{
							$('#username').next('.text1-error').css('color','green').html('√');
							bstop=false;
						}
					}
				})
			}else{
				  $(this).next('.text1-error').css('color','red').html('格式不正确');
				  bstop=true;
			}
		}else{
			$(this).next('.text1-error').css('color','red').html('用户名不能为空');
			bstop=true;
		}
	});
	
	
	$('form').on('submit',function(){//验证不通过无法提交的
		if(bstop){
			return false;//阻止按钮跳转。
		}
	});
	
	
});