<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

// Get the posted data.




use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
/* Exception class. */
//require 'phpmailer\src\Exception.php';

/* The main PHPMailer class. */
//require 'phpmailer\src\PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
//require 'phpmailer\src\SMTP.php';

    require '../vendor/autoload.php';
   
   
    $request = json_decode($_POST['reqObj']);
    
    $image1 = $_FILES['file1']['name'];      

    $image2= $_FILES['file2']['name'];

   //get file extension
    $extImage1 = pathinfo($image1,PATHINFO_EXTENSION);
    $extImage2 = pathinfo($image2,PATHINFO_EXTENSION);

    $target_dir = "images/";

    $target_file1 = $target_dir.basename($image1).".".$extImage1;

    $target_file2 = $target_dir.basename($image2).".".$extImage2;

    $result=array(); 
    
    echo json_encode(move_uploaded_file($_FILES['file1']['tmp_name'],$target_file1));
    echo json_encode(move_uploaded_file($_FILES['file2']['tmp_name'],$target_file2));

    $mail = new PHPMailer(TRUE);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'xxxx.xxx.xxx';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'xxxxxxx@xxxx.xxx';                     //SMTP username
        $mail->Password   = 'xxxxxxx';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        //Recipients
        $mail->setFrom($request->email, $request->name);
        $mail->addAddress('xxxxxxxxxx.com', 'Urgent Care Bumper Repair' );     
        // $mail->addAddress($request->email);               
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('estimate@urgentcarebumperrepair.com');
       // $mail->addBCC('bcc@example.com');
    
        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        $mail->addAttachment($target_file1);    //Optional name
        $mail->addAttachment($target_file2); 
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Customer Estimate Request Urgent Care Bumper Repair';
        $mail->Body = "<p>Contact Info:</p>";
        $mail->Body .= "<p>Name: {$request->name} </p>";
        $mail->Body .= "<p>Email: {$request->email} </p>";
        $mail->Body .= "<p>Phone: {$request->phone} </p>";
        $mail->Body .= "<p>Make: {$request->make} </p>";
        $mail->Body .= "<p>Model: {$request->model} </p>"; 
        $mail->Body .= "<p>Year: {$request->year} </p>";
       
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $mail->send();

        echo json_encode($mail);
        unlink($target_file1);
        unlink($target_file2);


        
    } catch (Exception $e) {
       echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
       unlink($target_file1);
       unlink($target_file2);
        
    } 







