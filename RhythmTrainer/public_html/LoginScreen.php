
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

 <?php 
$link = mysql_connect('willshar.ipowermysql.com', 'willshar', 'willshar'); 
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
echo 'Connected successfully'; 
mysql_select_db(rhythm_trainer); 
if($_POST) {
        $sql = "SELECT * FROM User WHERE email='$_POST[email]' AND password=SHA1('$_POST[password]')";
        $result = mysql_query($sql);
        $data = mysql_fetch_array($result);
        if(mysql_num_rows($result) == 1) {
          
            header('Location: http://willshar.ipower.com/rhythmtrainer/TrackSelect.html');
        } else {
            echo "<p style='background-color:red;display:inline;'>Wrong Username or Password</p>";
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
                <button type="submit" > Login</button>
                

               
    
                
            </form>
        </div>
    </body>
</html>

