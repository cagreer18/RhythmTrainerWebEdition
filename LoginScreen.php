<!DOCTYPE html>
<?php
session_start();
include_once 'Dbconnect.php';
if(isset($_SESSION['email'])!="")
{
 header("Location: TrackSelect.html");
}


if(isset($_POST['btn-login']))
{
 $email = ($_POST['email']);
 $upass = ($_POST['password']);
 $res=mysql_query("SELECT * FROM User WHERE email='$email'");

 $row=mysql_fetch_array($res);
 echo sha1($upass);
if($row['password']==sha1($upass))
 {
  $_SESSION['email'] = $row['email'];
echo "<meta http-equiv=\"refresh\" content=\"0;URL=TrackSelect.html\">";

}
else
{

 } 
}
?>
<html>
    <head>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="LoginScreenStyles.css">

    </head>
    <body>
        <div>
            <form method="post" action="LoginScreen.php">
                <input name="email" class="inputfield" type="text" placeholder="Email">
                <input name="password" class="inputfield" type="password" placeholder="Password">
                <button name = "btn-login" type="submit" > Login</button>
                <a href="register.php">Register new account</a>

               
    
                
            </form>
        </div>
    </body>
</html>