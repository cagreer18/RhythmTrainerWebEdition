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

if($row['password']==sha1($upass))
 {
  $_SESSION['email'] = $row['email'];
echo "<meta http-equiv=\"refresh\" content=\"0;URL=TrackSelect.html\">";

}
else
{
    ?>
  <script> alert("Invalid username and/or password.");</script> 
  <?php   
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
                <center><button name = "btn-login" type="submit" > Login</button></center>
                <center><a href="register.php">Register new account</a></center>

               
    
                
            </form>
        </div>
    </body>
<footer><p>Credits: Concept by <a href="http//:lovelythinking.com">Dr. Wiley</a>      Develeopment Team: Coul Greer, Kevin Hannan, Bradford Barclay, Collin Clayton</p>
             </footer>
</html>