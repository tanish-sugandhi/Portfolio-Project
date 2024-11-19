<?php 
if($_SERVER["REQUEST_METHOD"]=="POST"){

     $name=$_POST['Name'];
     echo $name;
     $email=$_POST['Email'];
     $subject=$_POST['Subject'];
     $message=$_POST['Message'];

     $conn= new mysqli('localhost','root','','portfolio');

     if($conn->connect_error){
        die('connection failed'.$conn->connect_error);
     }

     $query="INSERT INTO contact1 (Name,Email,Subject,Message) VALUES ($name,$email,$subject,$message)";
 
          if($conn->query($query)===TRUE){
               echo "data inserted sucessfully";
              }
            }
?>