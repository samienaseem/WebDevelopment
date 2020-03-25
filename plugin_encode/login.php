<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<?php
require="conn.php";
$username="samar123";
$password="123123";
$query="select * from Student where username '$username' and password '$password'";

$res=mysqli_query($conn,$query);

if (mysqli_num_rows($res)>0) {

	echo "success hogya";
		# code...
}
else {

	echo "ni hua";
	# code...
}

?>

</body>
</html>

