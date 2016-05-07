<!DOCTYPE html>
<?php
  session_start();
  include_once 'Dbconnect.php';

  if(isset($_POST['btn-login'])) {
    $email = ($_POST['email']);
    $upass = ($_POST['password']);
    $res = mysql_query("SELECT * FROM User WHERE email='$email'");
    $row = mysql_fetch_array($res);
    if($row['password']==sha1($upass)) {
      $_SESSION['email'] = $row['email'];
      echo "<meta http-equiv=\"refresh\" content=\"0;URL=http://willshare.com/RhythmTrainer/trackSelect\">";
    } else {
?>
<script> alert("Invalid username and/or password."); </script> 
<?php
    } 
  }
?>
<html>
    <head>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="LoginScreenStyles.css?<?php echo date('l jS \of F Y h:i:s A'); ?>">
    </head>
    <body>
        <div>
            <form method="post" action="http://willshare.com/RhythmTrainer/Login">
                <input name="email" class="inputfield" type="text" placeholder="Email">
                <input name="password" class="inputfield" type="password" placeholder="Password">
                <center><button name = "btn-login" type="submit" > Login</button></center>
                <center><a href="http://willshare.com/RhythmTrainer/Register">Register new account</a></center>
          </form>
       </div>
    </body>
</html>