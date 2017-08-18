<?php
$to      = 'lucas@cartorioapp.com';
$subject = 'Newsletter';
$message = 'Nome: '. $_POST['name'];
$message .= '<br/>';
$message .= 'Email: '. $_POST['email'];
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $subject, $message, $headers);
?>