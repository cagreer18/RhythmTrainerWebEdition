<?php
if(!mysql_connect("willshar.ipowermysql.com","willshar","willshar"))
{
     die('oops connection problem ! --> '.mysql_error());
}
if(!mysql_select_db("rhythm_trainer"))
{
     die('oops database selection problem ! --> '.mysql_error());
}
{
echo 'Connected SUCESS!!!!!!!';
}
?>