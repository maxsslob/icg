<?php 
session_start();
$source = $_SESSION['utm_source'];
$medium = $_SESSION['utm_medium'];
$campaign = $_SESSION['utm_campaign'];
$content = $_SESSION['utm_content'];
$term = $_SESSION['utm_term'];

$senderName = $_POST['name'];
$senderPhone = $_POST['phone'];
$senderEmail = $_POST['email'];
$senderComments = $_POST['comments'];
$senderService = $_POST['service'];

	$to      = 'zayavka@icg.by';
	$subject = 'Новая заявка по '.$senderService.' | icg.by';
	
	$senderDate = date("d.m в H:i", gmdate("U", time()));
	$mail_template = $mail_template.'<h4>Поступила заявка с сайта </h4>';
	$mail_template = $mail_template.'<b> Интересующая услуга: '.$senderService.'</b>';

	$mail_template = $mail_template.'<p>Имя: '.$senderName.' </p>';
	$mail_template = $mail_template.'<p>Телефон: '.$senderPhone.' </p>';
	$mail_template = $mail_template.'<p>Email: '.$senderEmail.' </p>';
	$mail_template = $mail_template.'<p>Комментарии: '.$senderComments.' </p></br>';

	$mail_template = $mail_template.'<p>Рекламная система : '.$source.'</p>';
	$mail_template = $mail_template.'<p>Тип трафика : '.$medium.'</p>';
	$mail_template = $mail_template.'<p>Компания : '.$campaign.'</p>';
	$mail_template = $mail_template.'<p>Объявление : '.$content.'</p>';
	$mail_template = $mail_template.'<p>Ключевое слово : '.$term.'</p>';
	$mail_template = $mail_template.'<p>utm_link : ?utm_source='.$source.'&utm_medium='.$medium.'&utm_term='.$term.'&utm_content='.$content.'&utm_campaign='.$campaign.'</p>';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	mail($to, $subject, $mail_template, $headers);
?>