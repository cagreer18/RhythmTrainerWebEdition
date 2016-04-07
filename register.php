<?php
session_start();
if(isset($_SESSION['email'])!="")
{
 header("Location: TrackSelect.html");
}
include_once 'Dbconnect.php';

if(isset($_POST['btn-signup']))
{

 $email = mysql_real_escape_string($_POST['email']);
 $upass = sha1(mysql_real_escape_string($_POST['password']));
 
 if(mysql_query("INSERT INTO User(email,password) VALUES('$email','$upass')"))
 {
  ?>
        <script>alert('successfully registered ');</script>
        <?php
 }
 else
 {
  ?>
        <script>alert('error while registering you...');</script>
        <?php
 }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login & Registration System</title>
<link rel="stylesheet" href="RegisterStyles.css" type="text/css" />

</head>
<body>
<center>
<h2 id="label">
<center>
  Create Account
</center>
</h2>
<div id="login-form">
<form method="post">
<table align="center" width="30%" border="0">
<tr>
<td><center><input class="field" type="email" name="email" placeholder="Your Email" required /></center></td>
</tr>
<tr>
<td><center><input class="field" type="password" name="pass" placeholder="Your Password" required /></center></td>
</tr>
<tr>
<td><center><button class="field" type="submit" name="btn-signup">Sign Me Up</button></center></td>
</tr>
<tr>
<td><center><a id="login"href="LoginScreen.php">Login</a></center></td>
</tr>
</table>
</form>
</div>
</center>
</body>
</html>