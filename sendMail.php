<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require 'gforms.php';


$mailS = $_POST["mail"];

var_dump($mailS);

$title = "Спецпредложения";
$file = $_FILES['file'];


$c = true;
// Формирование самого письма
$body = "
    <tr>
      <th>Mail: </th>
    </tr>
    <tr style='background-color: #f8f8f8;'>  
      <td style='padding: 10px; border: #e9e9e9 1px solid; text-align: center;'>$mailS</td>
    </tr>
";

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'avukz01@gmail.com'; // Логин на почте
  $mail->Password   = 'ultumbayvcjtjpdp'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('avukz01@gmail.com', 'Заявка на товар'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('avukz01@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
  sendGoogleTableMail($mailS);
} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}