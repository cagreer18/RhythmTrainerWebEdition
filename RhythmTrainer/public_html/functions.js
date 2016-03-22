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

var wNote = {duration: 4000, type: "note"};
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
var userInput = [];
var rhythmSheet = [];
var topOfQueue;
var bongo = new Audio("audio/Bongo.mp3");
var shush = new Audio("audio/Shush.wav");
var solutionTrack = [];
var text;
var buffer = 200;
var elapsed;
var checker;
var percentage;
var letterGrade;
var countedBeat = 0;
var accurateHits = 0;
var trackEnded = false;
var trackStarted = false;
var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
var para = document.createElement("p");
para.setAttribute("class", "notes");

var selectedLevel = 1;

var q1 = {image: "q1.jpg", note: [qNote, qNote, qNote, qNote]};
var q2 = {image: "q2.jpg", note: [hNote, qNote, qNote]};
var q3 = {image: "q3.jpg", note: [qNote, qNote, hNote]};
var q4 = {image: "q4.jpg", note: [qNote, hNote, qNote]};
var q5 = {image: "q5.jpg", note: [qNote, qRest, hNote]};
var q6 = {image: "q6.jpg", note: [qRest, qNote, hNote]};
var q7 = {image: "q7.jpg", note: [qNote, qNote, qRest, qNote]};
var q8 = {image: "q8.jpg", note: [qNote, qNote, qNote, qRest]};
var q9 = {image: "q9.jpg", note: [qRest, qNote, hNote]};
var q10 = {image: "q10.jpg", note: [qRest, qNote, qNote, qNote]};
var q11 = {image: "q11.jpg", note: [qNote, hNote, qNote]};
var q12 = {image: "q12.jpg", note: [hNote, qRest, qNote]};
var w1 = {image: "w1.jpg", note: [wNote]};
var w2 = {image: "w2.jpg", note: [wRest]};
var h1 = {image: "h1.jpg", note: [hNote, hNote]};
var h2 = {image: "h2.jpg", note: [hNote, hRest]};
var h3 = {image: "h3.jpg", note: [hRest, hNote]};
var h4 = {image: "h4.jpg", note: [hRest, hRest]};
var hd1 = {image: "hd1.jpg", note: [dhNote, qNote]};
var hd2 = {image: "hd2.jpg", note: [dhNote, qNote]};
var hd3 = {image: "hd3.jpg", note: [qNote, dhNote]};
var hd4 = {image: "hd4.jpg", note: [qNote, dhNote]};
var hd5 = {image: "hd5.jpg", note: [qNote, dhNote]};
var hd6 = {image: "hd6.jpg", note: [dhRest, qNote]};
var level1 = [w1, w2];
var level2 = [h1, h2, h3, h4];
var level3 = [hd1, hd2, hd3, hd4, hd5, hd6];
var level4 = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
var levels = [level1, level2, level3, level4];
var solutionImages = [];

function generateSolutionTrack() {
    for (var x = 0; x < 4; x++) {
        var randomIndex = Math.floor(Math.random() * 10);
        if (randomIndex > 0) {
            var chosenLevel = levels[selectedLevel - 1];
            var chosenMeasure = chosenLevel[Math.floor(Math.random() * chosenLevel.length)];
            for (var y = 0; y < chosenMeasure["note"].length; y++) {
                solutionTrack.push(chosenMeasure["note"][y]);
            }
            solutionImages.push(chosenMeasure["image"]);
        } else {
            var chosenLevel = levels[(Math.floor(Math.random()) * selectedLevel)];
            var chosenMeasure = chosenLevel[Math.floor(Math.random() * chosenLevel.length)];
            for (var y = 0; y < chosenMeasure["note"].length; y++)
            {
                solutionTrack.push(chosenMeasure["note"][y]);
            }
            solutionImages.push(chosenMeasure["image"]);
        }
    }
}

function isTrackDone() {
    generateSolutionTrack();
    generateRhythmSheet(solutionTrack);
    checker = setInterval(function () {
        if (elapsed > rhythmSheet[rhythmSheet.length - 1] + 1) {
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

function compareTracks() {
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

function toggleResultPopup() {
    element = document.getElementById("overlay");
    element.style.visibility = (element.style.visibility === "visible") ? "hidden" : "visible";
}

function generateRhythmSheet(solutionTrack) {
    rhythmSheet[0] = 0;
    for (var i = 0; i < solutionTrack.length; i++) {
        rhythmSheet[i + 1] = rhythmSheet[i] + solutionTrack[i]["duration"];
        if (solutionTrack[i].type === "rest") {
            rests.push(rhythmSheet[i], solutionTrack[i]["duration"]);
        } else if (solutionTrack[i].type === "note") {
            notes.push(rhythmSheet[i]);
        }
    }
    accurateHits += rests.length / 2;
    topOfQueue = notes.shift();
    topOfRestQueue = rests.shift();
    topOfRestQueueDuration = rests.shift();
}

function start() {
    checkNote();
    for (var i = 0; i < solutionTrack.length; i++) {
        var element = document.getElementById("solutionTrackDisplay");
        element.appendChild(para);
    }
    countdown();
}

function checkNote() {
    text = document.createElement("img");
    text.setAttribute("src", "images/perc_clef.jpg");
    para.appendChild(text);
    text = document.createElement("img")
    text.setAttribute("src", "images/4-4_time_signature_1.jpg")
    para.appendChild(text);
    for (var x = 0; x < solutionImages.length; x++) {
        text = document.createElement("img")
        text.setAttribute("src", "images/bar_line.jpg")
        para.appendChild(text)
        text = document.createElement("img");
        text.setAttribute("src", "images/" + solutionImages[x]);
        para.appendChild(text);
    }
    text = document.createElement("img");
    text.setAttribute("src", "images/bar_line_final.jpg");
    para.appendChild(text);
}

function countdown() {
    document.getElementById("countdown").style.display = "block";
    var countdownTimer = 5;
    var timer = setInterval(
            function () {
                if (countdownTimer > 0) {
                    document.getElementById("countdown").innerHTML = countdownTimer;
                    countdownTimer--;
                    metronomeTrack.play();
                } else {
                    clearInterval(timer);
                    playTrack();
                    document.getElementById("actionButton").disabled = false;
                }
            }, 1000);
}

function playTrack() {
    document.getElementById("timestamp").innerHTML = "";
    accurateTimer();
}

function reloadPage() {
    location.reload();
}

function accurateTimer() {
    var start = new Date().getTime();
    elapsed = '0.0';
    window.setInterval(function () {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time);
    }, 10);
}

var topOfRestQueue;
var topOfRestQueueDuration;
function appendToDiv() {
    var para = document.createElement("p");
    var node = document.createTextNode(elapsed);
    var currentInput = elapsed;
    while (currentInput >= topOfQueue - buffer) {
        if (currentInput >= (topOfQueue - buffer) && currentInput <= (topOfQueue + buffer)) {
            accurateHits++;
            bongo.play();
        }
        topOfQueue = notes.shift();
    }
    while (currentInput >= topOfRestQueue) {
        if (topOfRestQueue <= currentInput && currentInput < topOfRestQueue + (topOfRestQueueDuration - 200)) {
            accurateHits--;
            shush.play();
        }
        topOfRestQueue = rests.shift();
        topOfRestQueueDuration = rests.shift();
    }
    para.appendChild(node);
    var element = document.getElementById("timestamp");
    element.appendChild(para);
}

window.addEventListener('keydown', function (event) {
    if (trackEnded === true) {
    } else if (trackStarted && event.keyCode == 32) {
        appendToDiv();
    }
}, false);

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

var levelNote;
function populateList() {
    var thumbnail;
    for (var i = 0; i < levels.length; i++) {
        var para = document.createElement("p");
        switch (i) {
            case 0:
                levelNote = "Whole Note";
                thumbnail = "w1.jpg";
                break;
            case 1:
                levelNote = "Half Note";
                thumbnail = "h1.jpg";
                break;
            case 2:
                levelNote = "Dotted Half Note";
                thumbnail = "hd2.jpg";
                break;
            case 3:
                levelNote = "Quarter Note";
                thumbnail = "q1.jpg";
                break;
            default:
                break;
        }
        var node = document.createTextNode("Level " + (i + 1) + " " + levelNote);
        para.appendChild(node);
        var imgNode = document.createElement("input");
        imgNode.setAttribute("type", "image");
        imgNode.setAttribute("src", "images/" + thumbnail);
        imgNode.setAttribute("onclick", "loadPage()");
        var element = document.getElementById("trackList");
        element.appendChild(para);
        element.appendChild(imgNode);
        para.appendChild(document.createElement("br"));
    }
}

function loadPage() {
    location.href = 'index.html';
}
