<!DOCTYPE html>
<html>
    <head>
        <title>
            Rhythm Trainer
        </title>
        <script src="functions.js"></script>
        <link rel="stylesheet" type="text/css" href="GameScreenStyles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </head>
    <body onload="isTrackDone();" onresize="resize()">
        <div id="solutionTrackDisplay">
        </div>
        <div id="wrap">
            <div id="timestamp">
                <span id = "help" >Tap along in time with the music! Press the button below to begin. To tap along with the music, you may either click the button below, or tap the space bar. </span>
                <div id="countdown">
                </div>
            </div>
            <button id="actionButton" onmousedown="changeActionButtonState();resize()">Start</button>
        </div>
        <div class="overlay" id="overlay">
            <div id="result-popup">
                <p>
                    Your Results
                </p>
                <p id="result">
                </p>
                <button id="OKButton" onmousedown="toggleResultPopup()">Ok</button>
                <button id="ResetButton" onmousedown="reloadPage()">Retry</button>
            </div>
        </div>
    </body>
</html>