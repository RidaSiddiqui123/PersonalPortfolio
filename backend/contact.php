<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


// file_put_contents('debug_log.txt', 'Request Method: ' . $_SERVER['REQUEST_METHOD'] . PHP_EOL);
// file_put_contents('debug_log.txt', print_r($_POST, true), FILE_APPEND);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;




ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    //'C:/MAMP/htdocs/personalPortfolio/composer/vendor/autoload.php'
    $file = './vendor/autoload.php';

    if (file_exists($file)) {
        echo "File exists: $file";
        require($file);
    } else {
        echo "File does not exist at: $file";
    }


    $hostname = 'smtp.gmail.com';
    $port = 587; // Replace with your SMTP port

    $connection = fsockopen($hostname, $port, $errno, $errstr, 15);
    if (!$connection) {
        echo "Connection failed: $errstr ($errno)";
    } else {
        echo "Connection successful to $hostname on port $port";
        fclose($connection);
    }
    
    // var_dump(stream_get_transports());
    
    $first_name = isset($_POST['first-name']) ? $_POST['first-name'] : '';
    $last_name = isset($_POST['last-name']) ? $_POST['last-name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? nl2br($_POST['message']) : '';
    
    // echo $first_name;
    // echo $last_name;
    // echo $email;
    // echo $message;

    if ($first_name && $last_name && $email && $message) {
        
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // 'C:/MAMP/htdocs/personalPortfolio/composer/vendor/autoload.php'
            require './vendor/autoload.php';

            $mail = new PHPMailer(true);

            try {
                //Server settings
                $mail->SMTPDebug = 3;                      //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = 'ridasiddiqui123@gmail.com';                     //SMTP username
                //ReactPortfolio
                $mail->Password   = 'erdmahdsfynawuqh';                               //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            
                //Recipients
            
                $mail->setFrom($email, 'Mailer');
                $mail->addAddress('ridasiddiqui123@gmail.com', 'Contact Form');     //Add a recipient
                // $mail->addAddress('ellen@example.com');               //Name is optional
                $mail->addReplyTo($email);
                // $mail->addCC('cc@example.com');
                // $mail->addBCC('bcc@example.com');
            
                //Attachments
                // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
            
                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = 'Portfolio - Contact Form - ' . $email;
                $mail->Body    = 'First Name: ' . $first_name . '<br />
                                    Last Name: ' . $last_name . '<br />
                                    Email: ' . $email . '<br />
                                    <br />
                                    Message: <br />' . $message;
                // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
                $mail->send();
                echo 'Message has been sent';
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        }

        else {
            echo "Invalid email!";
        }
    }

    else {
        echo "All fields are required!";
    }

?>