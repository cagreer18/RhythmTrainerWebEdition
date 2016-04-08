<!DOCTYPE html>

<?php
include "functions.php";
$levelNote;
function populateList() {
    $thumbnail;
    for ($i = 0; $i < count($levels); $i++) {
        $dom = new DOMElement();
        $dom->load("TrackSelect.php");
        $para = $dom->createElement("p");
        switch ($i) {
            case 0:
                $levelNote = "Whole Note";
                $thumbnail = "w1.jpg";
                break;
            case 1:
                $levelNote = "Half Note";
                $thumbnail = "h1.jpg";
                break;
            case 2:
                $levelNote = "Dotted Half Note";
                $thumbnail = "hd2.jpg";
                break;
            case 3:
                $levelNote = "Quarter Note";
                $thumbnail = "q1.jpg";
                break;
            default:
                break;
        }
        $node = $dom->createTextNode("Level " + ($i + 1) + " " + $levelNote);
        $para->appendChild($node);
        $imgNode = $dom->createElement("input");
        $imgNode->setAttribute("type", "image");
        $imgNode->setAttribute("src", "images/" + $thumbnail);
        $element = $dom->getElementById("trackList");
        $element->appendChild($para);
        $element->appendChild($imgNode);
        $para->appendChild($dom->createElement("br"));
        $imgNode.onclick = function(){
            $_GET["selectedLevel"] = $i+1;
          echo "<meta http-equiv=\"refresh\" content=\"0;URL=index.php\">";
        };
    }
}
?>

<html>
    <head>
        <title>Rhythm Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="TrackSelectStyles.css">
        
    </head>
    <body onload="populateList()">
        <div class="trackList" id ="trackList">
        </div>
    </body>  <div id="right">
     <div id="content">
         hi' <?php echo $userRow['username']; ?>&nbsp;<a href="Logout.php?logout">Sign Out</a>
        </div>
    </div>

</html>
