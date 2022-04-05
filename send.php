<?php
//Принимаем постовые данные
$name=$_POST['name'];
$phone=$_POST['phone'];
$company=$_POST['company'];
$email=$_POST['email'];
$message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "flake333@yandex.ru";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Компания: ".htmlspecialchars($company)."<br />
Email: ".htmlspecialchars($email)."<br />
Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a><br />
Сообщение: ".htmlspecialchars($message);
// Отправляем письмо при помощи функции mail();
$headers = "From: rokeen.ru <mail@rokeen.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
header('Location: thanks.html');
exit();
?>