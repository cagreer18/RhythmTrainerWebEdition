<?php
session_start();

if(!isset($_SESSION['user']))
{
 header("Location: LoginScreen.php");
}
else if(isset($_SESSION['user'])!="")
{
 header("Location: TrackSelect.html");
}

if(isset($_GET['logout']))
{
 session_destroy();
 unset($_SESSION['user']);
 header("Location: LoginScreen.php");
}
?>