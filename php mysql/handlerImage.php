<?php

$target_path="Images";
$target_path=$target_path.basename($_FILES['fileToUpload']['name']);

if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'],$target_path)) {
  echo "Uploaded successfully";
}

else {
  echo "sorry cannot upload";
}


 ?>
