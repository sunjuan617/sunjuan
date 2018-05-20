//注册登录遮盖层
 $(function(){
                $(".denglu").click(function(){
                $("#mid").show();
                $(".login-inner").show();
                });
                $(".close").click(function(){
                $(".login-inner").hide();
                $("#mid").hide();
            });
            $(".username").focus(function(){
            	$(this).siblings('.text-error').hide();
            	return false;
            })
            $(".password").focus(function(){
            	$(this).siblings('.text-error').hide();
            	return false;
            })
            $(".username").blur(function(){
            	if($('.username').val()){
            		$(this).siblings('.text-error').hide();
            	} else {
            		$(this).siblings('.text-error').show();
            		return false;
            	}
            	
            })
            $(".password").blur(function(){
            	if($('.password').val()){
            		$(this).siblings('.text-error').hide();
            	} else {
            		$(this).siblings('.text-error').show();
            		return false;
            	}
            	
            })
        });

function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
				$('.btn').on('click',function(){
					var $username=$('.username').val();//用户名
					var $password=$('.password').val();//密码
					$.ajax({
						type:'post',
						url:'../php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
                       success:function(data){//请求成功，接收后端返回的值
							if(!data){//用户名或者密码错误
								$('.text-hide').show();
								$('input').val('');
								$('input').focus(function(){
									$('.text-hide').hide();
								})
							}else{//成功
								addCookie('UserName',$username,7);
								location.href='index.html';
							}
						 }
					})
			})