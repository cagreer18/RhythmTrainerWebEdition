<!DOCTYPE html>

<html>
    <head>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="TrackSelectStyles.css?<?php echo date('l jS \of F Y h:i:s A'); ?>" type="text/css">
    </head>
    <body>
        <form action="GameScreen.php" method="get" class="trackList" id ="trackList">
            <?php
            $levelNote;
            $thumbnail;
            for ($i = 1; $i <= 8; $i++) {
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
                    case 5:
                        $levelNote = "Eighth Note";
                        $thumbnail = "e1.jpg";
                        break;
                    case 6:
                        $levelNote = "Dotted Quarter Note";
                        $thumbnail = "qd1.jpg";
                        break;
                     case 7:
                        $levelNote = "Sixteenth Note";
                        $thumbnail = "s1.jpg";
                        break; 
                    case 8:
                        $levelNote = "Dotted Eighth Note";
                        $thumbnail = "de1.jpg";
                        break;  
                    default:
                        break;
                } ?>
                <p>Level <?php echo "$i $levelNote"; ?> </p>
                <input type="image" src="<?php echo "images/$thumbnail"; ?>" name="selectedLevel" value="<?php echo "$i"; ?>"></input>
                <br />
            <?php } ?>
        </form>
    </body>
</html>
