var Notes = {
    WHOLE_NOTE: 240000,
    HALF_NOTE: 120000,
    EIGHTH_NOTE: 30000,
    QUARTER_NOTE: 60000,
    SIXTENTH_NOTE: 15000,
    DOTED_QUARTER_NOTE: 90000,
    DOTED_HALF_NOTE: 180000,
    DOTED_EIGHTH_NOTE: 45000,
    DOTED_SIXTENTH_NOTE: 22500,
    TRIPLET_QUARTER_NOTE: 40000,
    TRIPLET_EIGHTH_NOTE: 20000,
    TRIPLET_SIXENTH_NOTE: 10000
};

function isTrackDone() {
    checker = setInterval(function () {
        if (elapsed - 300 > rhythmSheet[rhythmSheet.length - 1] + 1) {
            clearInterval(elapsed);
            elapsed = 0;
            compareTracks();
            toggleResultPopup();
            clearInterval(checker);
            trackEnded = true;
            metronomeTrack.pause();
        }
    }, 1);
}

var percentage;
var letterGrade;

function compareTracks() {
    for (var i = 0; i <= userInput.length - 1; i++) {
        userInput[i] = userInput[i] - 150;
    }
    for (var x = 0; x < rests.length; x++) {
        var start = rests[x];
        var finish = rests[x] + rests[x + 1];
        var hasCount = false;
        for (var j = 0; j <= userInput.length - 1; j++) {
            if (start <= userInput[j] && userInput[j] <= finish && !hasCount) {

                hasCount = true;
            }
        }
        if (!hasCount) {
            accurateHits++;
        }
        x++;
    }

    for (var i = 0; i < notes.length; i++) {
        var count = 0;
        var hasCounted = false;
        for (var j = count; j <= userInput.length - 1; j++) {
            if ((notes[i] >= userInput[j] - 200) && (notes[i] <= userInput[j] + 200 && !hasCounted)) {
                hasCounted = true;
                count = j + 1;
            }
        }
        if (hasCounted) {
            accurateHits++;
        }
    }
    percentage = accurateHits / solutionTrack.length;
    if (percentage <= 0.6) {
        letterGrade = 'F';
    } else if (percentage <= 0.7) {
        letterGrade = 'D';
    } else if (percentage <= 0.8) {
        letterGrade = 'C';
    } else if (percentage <= 0.9) {
        letterGrade = 'B';
    } else if (percentage <= 1.0) {
        letterGrade = 'A';
    } else {
        letterGrade = null;
    }
    document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + solutionTrack.length + "\nThat's a(n): " + letterGrade;
}
var para = document.createElement("p");
para.setAttribute("class", "notes");
var text;
function checkNote(duration, type) {

    if (duration == 4000)
    {
        if (type == "rest") {
            text = document.createTextNode("W");

        } else if (type == "note") {
            text = document.createTextNode("w");

        }
    } else if (duration == 1000) {
        if (type == "rest") {
            text = document.createTextNode("Q");

        } else if (type == "note") {
            text = document.createTextNode("q");

        }
    } else if (duration == 500) {
        if (type == "rest") {
            text = document.createTextNode("E");

        } else if (type == "note") {
            text = document.createTextNode("e");

        }
    } else if (duration == 250) {
        if (type == "rest") {
            text = document.createTextNode("S");

        } else if (type == "note") {
            text = document.createTextNode("s");
        }
    } else if (duration == 3000)
    {
        if (type == "rest") {
            text = document.createTextNode("D");

        } else if (type == "note") {
            text = document.createTextNode("d");
        }


    }

    para.appendChild(text);

}
function checkTieOver(tempNote, countedBeat)
{
    var remainder;
    var otherRemainder;

    if (countedBeat + tempNote.duration > 4000)
    {
        remainder = countedBeat + tempNote.duration - 4000;
        otherRemainder = tempNote.duration - remainder;
        checkNote(otherRemainder, tempNote.type);
        text = document.createTextNode("V");
        checkNote(remainder, tempNote.type);



    } else {
        checkNote(tempNote.duration, tempNote.type);
        if (countedBeat >= 4000) {
            text = document.createTextNode("'");
            para.appendChild(text);
            countedBeat = 0;
        }
    }

}
function start() {
    var countedBeat = 0;

    for (var i = 0; i < solutionTrack.length; i++) {
        tempNote = solutionTrack[i];



        countedBeat += solutionTrack[i].duration;
        checkTieOver(tempNote, countedBeat);






        var element = document.getElementById("trackDiv");
        element.appendChild(para);
    }

    countdown();
}

var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");

function countdown() {
    document.getElementById("countdown").style.display = "block";
    var count = 5;
    var timer = setInterval(
            function () {
                if (count > 0) {
                    document.getElementById("countdown").innerHTML = count;
                    count--;
                    metronomeTrack.play();

                } else {
                    clearInterval(timer);
                    playTrack();
                    document.getElementById("actionButton").disabled = false;
                    document.getElementById("countdown").style.display = "none";
                }
            }, 1000);
}

function playTrack() {
    document.getElementById("timestamp").innerHTML = "";
    accurateTimer();
}

function incrementTime() {
    elapsedTime++;
}

function accurateTimer() {
    var start = new Date().getTime();
    elapsed = '0.0';
    window.setInterval(function () {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time);
        document.title = elapsed;

    }, 10);
}

function appendToDiv() {
    var para = document.createElement("p");
    var node = document.createTextNode(elapsed);
    userInput.push(elapsed);
    para.appendChild(node);

    var element = document.getElementById("timestamp");
    element.appendChild(para);
}

function toggleResultPopup() {
    element = document.getElementById("overlay");
    element.style.visibility = (element.style.visibility === "visible") ? "hidden" : "visible";
}

var wRest = {duration: 4000, type: "rest"};
var hRest = {duration: 2000, type: "rest"};
var qRest = {duration: 1000, type: "rest"};
var eRest = {duration: 500, type: "rest"};
var sRest = {duration: 250, type: "rest"};
var dhRest = {duration: 3000, type: "rest"};
var dqRest = {duration: 1500, type: "rest"};
var deRest = {duration: 750, type: "rest"};
var dsRest = {duration: 375, type: "rest"};
var tqRest = {duration: 667, type: "rest"};
var teRest = {duration: 333, type: "rest"};
var tsRest = {duration: 167, type: "rest"};

var wNote = {duration: 4000, type: "note", key: "w"};
var hNote = {duration: 2000, type: "note"};
var qNote = {duration: 1000, type: "note"};
var eNote = {duration: 500, type: "note"};
var sNote = {duration: 250, type: "note"};
var dhNote = {duration: 3000, type: "note"};
var dqNote = {duration: 1500, type: "note"};
var deNote = {duration: 750, type: "note"};
var dsNote = {duration: 375, type: "note"};
var tqNote = {duration: 667, type: "note"};
var teNote = {duration: 333, type: "note"};
var tsNote = {duration: 167, type: "note"};

var notes = [];
var rests = [];
var solutionTrack = [qNote, wNote];
var rhythmSheet = [];

function generateRhythmSheet(solutionTrack) {

    for (var i = 0; i < solutionTrack.length; i++) {
        rhythmSheet[0] = 0;
        rhythmSheet[i + 1] = rhythmSheet[i] + solutionTrack[i].duration;
        if (solutionTrack[i].type == "rest") {
            rests.push(rhythmSheet[i], solutionTrack[i].duration);
        } else if (solutionTrack[i].type == "note") {
            notes.push(rhythmSheet[i]);
        }
    }
}
window.addEventListener('keydown', function (event) {
    if (trackEnded == true) {

    } else if (trackStarted == true && event.keyCode == 32) {
        appendToDiv();
    }
}, false);
var userInput = [];
var checker;
var accurateHits = 0;
var countdown;
var elapsed;
var countdownTimer = 5;
var elapsedTime = 0;
generateRhythmSheet(solutionTrack);
var trackStarted = false;
var trackEnded = false;
function changeActionButtonState() {
    if (trackEnded) {
        document.getElementById("actionButton").disabled = true;
    } else if (!trackStarted) {
        start();
        document.getElementById("actionButton").disabled = true;
        trackStarted = true;
        document.getElementById("actionButton").textContent = "Click Me";
    } else if (trackStarted) {
        appendToDiv();
    }
}