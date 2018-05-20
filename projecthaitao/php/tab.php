<?php
header('content-type:text/html;charset:utf-8');
$conn=mysql_connect('localhost','root','');
if(!$conn){
	die('数据库连接失败');
	
}
mysql_select_db('fengqu');
mysql_query('SET NAMES UTF8');

$result1=mysql_query('select *from shop1');//执行sql语句,存储结果
$result2=mysql_query('select *from shop2 ');
$result3=mysql_query('select *from shop3 ');
$result4=mysql_query('select *from shop4 ');
$result5=mysql_query('select *from shop5 ');
$result6=mysql_query('select *from shop6');
$result7=mysql_query('select *from shop7');
$arr1=array();
for( $i=0;$i<mysql_num_rows($result1);$i++){
	
	$arr1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
}
    
     $arr2=array();
     for( $i=0;$i<mysql_num_rows($result2);$i++){
	
	$arr2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);

}
     
     $arr3=array();
     for( $i=0;$i<mysql_num_rows($result3);$i++){
	
	$arr3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
}
  $arr4=array();
     for( $i=0;$i<mysql_num_rows($result4);$i++){
	
	$arr4[$i]=mysql_fetch_array($result4,MYSQL_ASSOC);
}
 $arr5=array();
     for( $i=0;$i<mysql_num_rows($result5);$i++){
	
	$arr5[$i]=mysql_fetch_array($result5,MYSQL_ASSOC);
}
$arr6=array();
     for( $i=0;$i<mysql_num_rows($result6);$i++){
	
	$arr6[$i]=mysql_fetch_array($result6,MYSQL_ASSOC);
}
$arr7=array();
     for( $i=0;$i<mysql_num_rows($result7);$i++){
	
	$arr7[$i]=mysql_fetch_array($result7,MYSQL_ASSOC);
}
   
     
     class information{
      }
	$data=new information();
	$data->info1=$arr1;
	$data->info2=$arr2;
	$data->info3=$arr3;
	$data->info4=$arr4;
	$data->info5=$arr5;
	$data->info6=$arr6;
	$data->info7=$arr7;
    echo  json_encode($data);

mysql_close($conn);
?>