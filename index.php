<!DOCTYPE html>
<html>
    <head>
        <title>Rhythm Trainer</title>
       
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
<?php
    include ("functions.php");
    function generateSolutionTrack() {
    for ($x = 0; $x < 4; $x++) {
         $randomIndex = rand(0,9);
        if ($randomIndex > 1) {
            $chosenLevel = $levels[$_GET["selectedLevel"] - 1];
            $chosenMeasure = $chosenLevel[rand(0,count($chosenLevel))];
            for ($y = 0; $y < count($chosenMeasure.notes()); $y++) {
                array_push($solutionTrack, $chosenMeasure.notes()[$y]);
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
    echo "<script>var element = document.getElementById('overlay');
    element.style.visibility = (element.style.visibility === 'visible') ? 'hidden' : 'visible';
    if(element.style.visibility === 'hidden')
    {
     
    }</script>";
}

function generateRhythmSheet($solutionTrack) {
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
        echo "<script>
        var para = document.createElement('p');
        var element = document.getElementById('solutionTrackDisplay');
         element.appendChild(para);</script>";
    }
    countdown();
}

//might be wrong
function resize() { 
   echo "<script>
    var notes = document.getElementsByClassName('notation');
    for (var x = 0; x < notes.length; x++) {
        var newImage = new Image();
        newImage.src =  ".$notes."[x].getAttribute('src');
        var width = document.body.clientWidth / 1366 * newImage.width;
        ".$notes." [x].style.width = width + 'px'; 
    } </script>";

 
}
function addImages() {
   echo "<script> for (var x = 0; x <".count($solutionImages)."; $x++) {
        
        
        barline = document.createElement('img');
        barline.setAttribute('class', 'notation');
        switch (x) {
            case 0:
                barline.setAttribute('src', 'images/perc_clef.jpg');
                para.appendChild(barline);
                barline = document.createElement('img');
                barline.setAttribute('class', 'notation');
                barline.setAttribute('src', 'images/4-4_time_signature_1.jpg');
                para.appendChild(barline);
                break;
            case 1:
                barline.setAttribute('src', 'images/bar_line.jpg');
                para.appendChild(barline);
                break;
            case 2:
                barline.setAttribute('src', 'images/bar_line.jpg');
                para.appendChild(barline);
                para.appendChild(document.createElement('br'));
                barline = document.createElement('img');
                barline.setAttribute('class', 'notation');
                barline.setAttribute('src', 'images/perc_clef.jpg');
                para.appendChild(barline);
                break;
            case 3:
                barline.setAttribute('src', 'images/bar_line.jpg');
                para.appendChild(barline);
                break;
            default:
                break;

        }
        var measure = document.createElement('img');
        measure.setAttribute('class', 'notation');
        measure.setAttribute('src', 'images/' + solutionImages[x]);
        measure.setAttribute('onload', '".resize()."');
        para.appendChild(measure);
    }
    barline = document.createElement('img');
    barline.setAttribute('class', 'notation');
    barline.setAttribute('src', 'images/bar_line_final.jpg');
    barline.setAttribute('onload', '".resize()."');
    para.appendChild(barline);
    </script>";
  
}


function countdown() {
    echo "<script>document.getElementById('countdown').style.display = 'block';
    var countdownTimer = 5;
    var timer = setInterval(
            function () {
                if (countdownTimer > 0) {
                    document.getElementById('countdown').innerHTML = countdownTimer;
                    countdownTimer--;
                    metronomeTrack.play();
                } else {
                    clearInterval(timer);
                    playTrack();
                    document.getElementById('actionButton').disabled = false;
                }
            }, 1000);</script>";

}

function playTrack() {
    echo "<script>document.getElementById('timestamp').innerHTML = '';
     </script>";
     accurateTimer();
}

// Called after the retry button is pressed
function reloadPage() {
    echo "<script>location.reload();</script>";
}

function appendToDiv() {
    $dom = new DOMDocument();
    $dom->load('index.php');
    $para = $dom->createElement("p");
    $node = $dom->createTextNode($elapsed);
    $currentInput = $elapsed;

    while ($currentInput >= $topOfQueue - $buffer) {
        if ($currentInput >= ($topOfQueue - $buffer) && $currentInput <= ($topOfQueue + $buffer)) {
            $accurateHits++;
            echo "<script>bongo.play();</script>";
         }
        $topOfQueue = array_shift($note);
    }
    while ($currentInput >= $topOfRestQueue) {
        if ($topOfRestQueue <= $currentInput && $currentInput < $topOfRestQueue + ($topOfRestQueueDuration - 200)) {
            $accurateHits--;
           echo "<script>shush.play();</script>";
        }
        $topOfRestQueue = array_shift($rests);
        $topOfRestQueueDuration = array_shift($rests);
    }
    $para->appendChild($node);
    $element = $dom->getElementById("timestamp");
    $element->appendChild($para);
}

function accurateTimer() {
    echo "<script> var start = new Date().getTime();
    elapsed = '0.0';
    window.setInterval(function () {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time);
    }, 10);</script>";
}



echo "<script>window.addEventListener('keydown', function (event) {
    if (trackEnded === true) {
    } else if (trackStarted && event.keyCode == 32) {
        appendToDiv();
    }
}, false);</script>";

function changeActionButtonState() {
    if ($trackEnded) {
       echo "<script> document.getElementById('actionButton').disabled = true;</script>";
    } else if (!$trackStarted) {
        start();
       echo "<script> document.getElementById('actionButton').disabled = true;</script>";
        $trackStarted = true;
        echo "<script>document.getElementById('actionButton').textContent = 'Click Me';</script>";
    } else if ($trackStarted) {
        appendToDiv();
    }
}
?>