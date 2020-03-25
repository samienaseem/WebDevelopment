<?php

$servername="localhost";
$username="id10789539_softex4u";
$password="samar1213134";
$database="id10789539_mysqltesting";

$conn= mysqli_connect($servername, $username, $password,$database);

if (!$conn) {

	die("connection fialed");
	echo "connet ni hua";
	# code...
}
else
	echo "hogya Connect";



	$images=$_POST["image"];
	$target_path="Images"
	$image_name=uniqid().".png";

	if (isset($images)) {
	    	echo "hiiii";
	    }


	 if (validateString($images)) {

	 	$data=explode(',', $images);
	 	$ifp=fopen($_SERVER['DOCUMENT_ROOT']."/Images/".$image_name, "wb");
	 	fwrite($ifp, base64_decode($data[1]));
	 	fclose($ifp);

	 	echo "doneee";


	 	# code...
	 }


	 function validateString($string){

	 		$data=explode(',', $string);

	 		if (count($data)>=2) {
	 			$format=explode('/', $data[0]);


	 			if ($format[0]=='data:image') {
	 				return true;
	 			}
	 		}
	 		return false;

	 }

	    

	    //$file=$target_path . uniqid() . '.png';





	/*$image_part=explode(";base64", $images);
	$image_type_aux=explode("image/", $image_part[0]);
	$image_type=$image_type_aux[1];
*/	/*$image_base64=base64_decode($images);

	$im=imageCreateFromString($image_base64);

	if (!$im) {

		echo "not a valid base64 image";



		# code...
	}

	imagepng($im,$file,0);

	if (base64_encode(base64_decode(data))) {
		# code...
	}*/

	/*if(file_put_contents($file, $image_base64)){

		echo "success"


	}

	else {
		echo "Sorry";
	}*/



	

 ?>
