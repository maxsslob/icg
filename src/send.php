<?php 
session_start();
$source = $_SESSION['utm_source'];
$medium = $_SESSION['utm_medium'];
$campaign = $_SESSION['utm_campaign'];
$content = $_SESSION['utm_content'];
$term = $_SESSION['utm_term'];
	$to      = 'info@icg.by';
	$subject = 'Новая Заявка | ICG';
	$senderName = $_POST['name'];
	$senderPhone = $_POST['phone'];
	$senderEmail = $_POST['email'];
	$senderComments = $_POST['comments'];
	$senderService = $_POST['service'];
	$senderDate = date("d.m в H:i", gmdate("U", time()));
	$mail_template = $mail_template.'<h1>Поступила новая заявка на сайте. Пользователь указал следующие данные </h1>';
	$mail_template = $mail_template.'<h2>' .$senderService. '</h2>';
	$mail_template = $mail_template.'<p>Имя: '.$senderName.'</p>';
	$mail_template = $mail_template.'<p>Телефон: '.$senderPhone.'</p>';
	$mail_template = $mail_template.'<p>Телефон: '.$senderEmail.'</p>';
	$mail_template = $mail_template.'<p>Телефон: '.$senderComments.'</p>';


	$mail_template = $mail_template.'<p>Время отправки заявки: '.$senderDate.'</p>';

	$mail_template = $mail_template.'<p>Рекламная система : '.$source.'</p>';
	$mail_template = $mail_template.'<p>Тип трафика : '.$medium.'</p>';
	$mail_template = $mail_template.'<p>Компания : '.$campaign.'</p>';
	$mail_template = $mail_template.'<p>Объявление : '.$content.'</p>';
	$mail_template = $mail_template.'<p>Ключевое слово : '.$term.'</p>';

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	mail($to, $subject, $mail_template, $headers);
?>