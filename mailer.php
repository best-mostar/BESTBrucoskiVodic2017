<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $msg = $_POST['message'];
    $cName = $_POST['companyName'];
    $mail = $_POST['mail'];

    $subject = "[BEST Mostar][BV] Contact form";
    $message = "Ime:" . $name . "\r\nCompany: " . $cName . "\r\nEmail: " . $mail . "\r\nPoruka: " . $msg;
    $headers = "From: no-reply@best-mostar.org" . "\r\n" .
        "Reply-To: no-reply@best-mostar.org" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    mail('armin.comic@gmail.com', $subject, $message, $headers);

    echo "Your email is sent";

}
else
    echo "Your email is not sent";
die();
?>