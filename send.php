<?php 
$destination= "floresroofs@gmail.com";
$name= $_POST["name"];
$email= $_POST["email"];
$message= $_POST["message"];

$content= "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;

mail($destination, "Contact Flores Construction", $content);



echo '<script type="text/javascript">alert("!congratulations the message has been sent successfully¡")
  window.location.href="index.html";
 </script>';

?>