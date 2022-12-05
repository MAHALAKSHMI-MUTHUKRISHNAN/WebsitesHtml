<?php>
   $name = $_POST['name'];
   $visitor_email = $_POST['email'];
   $message = $_POST['message'];

   $email_form = 'mahalakshmi.ofl@gmail.com';
   
   $email_subject = 'New Form submission';

   $email_body = "User Name: $name.\n".
                 "User Email: $visitor_email.\n".
                 "User Message: $message.\n";


   $to = "maha18124.it@rmkec.ac.in";
   $headers = "From: $email_from \r\n";
   $headers = "Reply-To: $visitor_email \r\n";
   mail($to,$email_subject,$email_body,$headers);
   
   header("Location: index.html");
?>