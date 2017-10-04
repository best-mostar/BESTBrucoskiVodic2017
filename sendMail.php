<?php
    $name = $_POST['name'];
    $companyName = $_POST['companyName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'mirza.krzic@gmail.com';
    $from = 'From: ' . $name . " " . $companyName;
    $subject = 'Brucoški vodič 2017.';

    $body = "From: $name\n Company: $companyName\n E-mail: $email\n Message:\n $message";
?>

<?php
    if ($_POST['submit']) {
        if (mail($to, $subject, $body, $from)) {
            echo '<p>Your message has been sent!</p>';
        } else {
           echo '<p>Something went wrong, try again!</p>'; 
        }
    }
?>