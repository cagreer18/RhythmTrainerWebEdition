<!DOCTYPE html>

<?php
    include ('functions.php');
?>

<html>
    <head>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="TrackSelectStyles.css?<?php echo date('l jS \of F Y h:i:s A'); ?>" type="text/css">
    </head>
    <body>
        <form action="index.php" method="get" class="trackList" id ="trackList">
            <?php
            $levelNote;
            $thumbnail;
            for ($i = 1; $i <= 4; $i++) {
                switch ($i) {
                    case 1:
                        $levelNote = "Whole Note";
                        $thumbnail = "w1.jpg";
                        break;
                    case 2:
                        $levelNote = "Half Note";
                        $thumbnail = "h1.jpg";
                        break;
                    case 3:
                        $levelNote = "Dotted Half Note";
                        $thumbnail = "hd2.jpg";
                        break;
                    case 4:
                        $levelNote = "Quarter Note";
                        $thumbnail = "q1.jpg";
                        break;
                    default:
                        break;
                } ?>
                <p>Level <?php echo "$i $levelNote"; ?> </p>
                <input type="image" src="<?php echo "images/$thumbnail"; ?>" name="selectedLevel" value="<?php echo "$i"; ?>"></input>
                <br />
            <?php } ?>
        </form>
        <footer>
            <p>Credits: Concept by <a href="http://lovelythinking.com">Dr. Wiley</a> Develeopment Team: Coul Greer, Kevin Hannan, Bradford Barclay, Collin Clayton</p>
        </footer>
    </body> 
        <div class="content right">
            <a href="Logout.php">Sign Out</a>
        </div>
</html>
