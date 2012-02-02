<?php
if(isset($_POST['name'])) { $name = $_POST['name']; }
if(isset($_POST['email'])) { $email = $_POST['email']; }
if(isset($_POST['reason'])) { $reason = $_POST['reason']; }
if(isset($_POST['message'])) { $message = $_POST['message']; }
if(isset($_POST['phone'])) { $phone = $_POST['phone']; }

$to = 'contact@snakesandlattes.com';
//$to = 'tyler@theyoungastronauts.com';
$subject = "Snakes and Lattes Contact Form Submitted";
$body = "From: " . $name . " (" . $email . ")\n\r";
if($phone){
    $body .= "Phone: " . $phone . "\n\r";
}
$body .= "\n\r";
$body .= "Reason for Submitting: " . $reason . "\n\r";
$body .= $message;

$headers = "From: ". $email ."\r\n";
$headers .= "Reply-To: ". $email ."\r\n";
$headers .= "Return-Path: ". $email ."\r\n";

mail($to, $subject, $body, $headers);

echo 'Thanks for contacting us. We will get back to you as soon as possible.';

define('ENVIROMENT', $_SERVER['SERVER_NAME']);

switch(ENVIROMENT){

case 'snakeslite':
    $connecton = mysql_connect('localhost', 'root', '');
    $db = mysql_selectdb('snakeslite');
break;
case 'snakesandlattes.com':
    $connecton = mysql_connect('127.0.0.1', 'snakeslite', 'yaPGs6eFfmkJRXhP');
    $db = mysql_selectdb('snakeslite');
    break;

}

$sql = "INSERT INTO contacts (email, names, phone) VALUES ('$email', '$name', '$phone')";
$query = mysql_query($sql);



?>