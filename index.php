<?php
    function generateSolutionTrack() {
    for ($x = 0; $x < 4; $x++) {
         $randomIndex = rand(0,9);
        if ($randomIndex > 1) {
            $chosenLevel = $levels[$_GET["selectedLevel"] - 1];
            $chosenMeasure = $chosenLevel[rand(0,count($chosenLevel)) ];
            for ($y = 0; $y < count($chosenMeasure.notes()); $y++) {
                array_push($solutionTrack, $chosenMeasure.notes()[$y];
            }
            array_push($solutionImages, $chosenMeasure.imageUrl());
        } else {
            $chosenLevel = $levels[rand($_GET["selectedLevel"])];
            $chosenMeasure = $chosenLevel[rand(0,count($chosenLevel))];
            for ($y = 0; $y < count($chosenMeasure.notes()); $y++)
            {
                array_push($solutionTrack, $chosenMeasure.notes()[$y]);
            }
            array_push($solutionImages, $chosenMeasure.imageUrl());
        }
    }
}

function isTrackDone() {
    generateSolutionTrack();
    generateRhythmSheet($solutionTrack);
    ?>
    <script>
    checker = setInterval(function () {
       <?php if ($elapsed > $rhythmSheet[count($rhythmSheet) - 1] + 1) {
            clearInterval($elapsed);
            $elapsed = 0;
            compareTracks();
            toggleResultPopup(); ?>
            clearInterval(checker);
            metronomeTrack.pause();
      <?php $trackEnded = true;
            
        } ?>
    }, 1); </script>
    <?php
}

function compareTracks() {
    $percentage = $accurateHits / count($solutionTrack);
    if ($percentage <= 0.6) {
        $letterGrade = 'F';
    } else if ($percentage <= 0.7) {
        $letterGrade = 'D';
    } else if ($percentage <= 0.8) {
        $letterGrade = 'C';
    } else if ($percentage <= 0.9) {
        $letterGrade = 'B';
    } else if ($percentage <= 1.0) {
        $letterGrade = 'A';
    } else {
        $letterGrade = null;
    }

    
    $dom = new DOMDocument;
    $dom -> load("index.php");
    $dom -> getElementById("result")->innerHTML = "You got: " + $accurateHits + "/" + count($solutionTrack) + "\nThat's a(n): " + $letterGrade;
}

    //As well unsure if rest of this is good with php
function toggleResultPopup() {
    echo "var element = document.getElementById('overlay');";
    echo "element.style.visibility = (element.style.visibility === 'visible') ? 'hidden' : 'visible';";
    if(echo "element.style.visibility === 'hidden'";)
    {
       echo "<meta http-equiv=\'refresh\' content=\'0;URL=TrackSelect.html\'>";
    }
}

function generateRhythmSheet(solutionTrack) {
    $rhythmSheet = array(0);
    for ($i = 0; $i < count($solutionTrack); $i++) {
        $rhythmSheet[$i + 1] = $rhythmSheet[$i] + $solutionTrack[$i].duration();
        if ($solutionTrack[$i].type() === "rest") {
            array_push($rests, $rhythmSheet[$i], $solutionTrack[$i].duration());
        } else if ($solutionTrack[$i].type() === "note") {
            array_push($notes, $rhythmSheet[$i]);
        }
    }
    $accurateHits += count($rests) / 2;
    $topOfQueue = array_shift($notes);
    $topOfRestQueue = array_shift($rests);
    $topOfRestQueueDuration = array_shift($rest);
}

function start() {
    addImages();
    for ($i = 0; $i < count($solutionTrack); $i++) {
        echo " var element = document.getElementById('solutionTrackDisplay');";
        echo "element.appendChild(para);";
    }
    countdown();
}

//might be wrong
function resize() { ?>
    <script>
    var notes = document.getElementsByClassName("notation");
    for (var x = 0; x < notes.length; x++) {
        var newImage = new Image();
        newImage.src = <?php $notes ?>[x].getAttribute("src");
        var width = document.body.clientWidth / 1366 * newImage.width;
       <?php $notes ?> [x].style.width = width + "px"; 
    } </script>

<?php 
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Rhythm Trainer</title>
        <script src = "functions.js"></script>
        <link rel="stylesheet" type="text/css" href="GameScreenStyles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </head>

    <body onload="isTrackDone()">
        
        <div id="solutionTrackDisplay"></div>
        <div id="wrap">
            <div id="timestamp">
                <div id="countdown"></div>
            </div>
            <button id="actionButton" onmousedown="changeActionButtonState()">Start Timer</button>
        </div>
        <div class="overlay" id="overlay">
            <div id="result-popup">
                <p>Your Results</p>
                <p id="result"></p>
                <button id="OKButton" onmousedown="toggleResultPopup()">Ok</button>
                <button id="refreshButton" onmousedown="reloadPage()">Retry</button>

            </div>
        </div>
    </body>
</html>
