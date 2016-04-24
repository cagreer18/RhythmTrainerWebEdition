<!DOCTYPE html>

<html>
    <head>
    <script src="functions.js"></script>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="TrackSelectStyles.css?<?php echo date('l jS \of F Y h:i:s A'); ?>" type="text/css">
    </head>
    <body onload="populateList()">
        <form action="GameScreen.php" method="get" class="trackList" id ="trackList">
        </form>
<a href="HomeScreen.html">Sign Out</a>
    </body>
</html>