<?php
require_once( '../../../../wp-load.php' );

if(!isset($_POST) or $_POST['agree'] !== 'on'){
    wp_send_json_error();
}


$title = trim($_POST['title']);
$name = trim($_POST['name']);
$surname = trim($_POST['surname']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$company = trim($_POST['company']);
$url = trim($_POST['url']);


$message = "<b>Title</b> $title<br>
<b>Name</b> &nbsp;$name<br>
<b>Surname</b> &nbsp;$surname<br>
<b>Email</b> &nbsp;$email<br>
<b>Phone</b>&nbsp; $phone<br>
<b>Company</b> &nbsp;$company<br>
<b>URL</b>&nbsp;$url";

$message = wordwrap($message, 70, "\r\n");

$multiple_to_recipients = array(
    'interact@ekomi.com',
    'zaheer.abbass@coeus-solutions.de'
);

$send_email = wp_mail($multiple_to_recipients, 'Shopify Form', $message);

if(!$send_email){
    wp_send_json_error();
}
