<?php
// Load PHPMailer library
require_once('PHPMailer/PHPMailer-6.8.0.php');

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create PHPMailer object
$mail = new PHPMailer;

// Set up SMTP server settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = '1999priyankabansal@gmail.com';
$mail->Password = 'Coquelicot*987';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Set up email headers and body
$mail->From = '1999priyankabansal@gmail.com';
$mail->FromName = 'Priyanka';
$mail->addAddress('daalvidechamma2000@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'New message from contact form';
$mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

// Send email
if ($mail->send()) {
  echo 'Message sent!';
} else {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>
