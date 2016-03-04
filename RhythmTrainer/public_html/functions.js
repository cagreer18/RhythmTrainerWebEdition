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
var track1 = new Track([qNote, qNote, qRest, qNote, qRest, qNote, qNote, qRest], 1, true);
var track2 = new Track([qNote, hNote, qNote, qRest, qNote, hNote], 1, true);
var track3 = new Track([qNote, qNote, eNote, eNote, eNote, eNote, eRest, eNote, eRest, eNote, qNote, qNote], 2, false);
var track4 = new Track([qNote, dqNote, eNote, eNote, eNote, hNote, eNote, dqNote], 2, false);
var track5 = new Track([qNote, sNote, sNote, sNote, sNote, qNote, eNote, sRest, sNote, sNote, qNote, sNote, sNote, sNote, sNote, qNote, eNote, sRest, sNote, sNote], 3, false);
var track6 = new Track([qNote, deNote, sNote, qNote, eNote, sRest, sNote, sNote, qNote, deNote, sNote, qNote, eNote, sRest, sNote, sNote], 3, false);
var track7 = new Track([qNote, teNote, teNote, teNote, qNote, teNote, teNote, teNote, teNote, teNote, teNote, qNote, teNote, teNote, teNote, qNote], 4, false);
var track8 = new Track([teNote, teRest, teNote, teNote, teNote, teRest, teNote, teNote, teNote, teRest, teNote, teNote, eNote, eNote, qRest, hNote], 4, false);
var track9 = new Track([tqNote, tqNote, tqNote, teNote, teNote, teNote, teNote, teNote, teNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tsNote, tqNote, tqNote, tqNote], 5, false);
var tracks = [track1, track2, track3, track4, track5, track6, track7, track8, track9];
var solutionTrack = track1.notes;//[sNote, eNote, qNote, hNote,wNote];
var text;
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

function isTrackDone() {
    generateRhythmSheet(solutionTrack);
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

function compareTracks() {
    for (var x = 0; x < rests.length; x++) {
        var start = rests[x];
        var finish = rests[x] + rests[x + 1];
        var hasCounted = false;
        for (var j = 0; j <= userInput.length - 1; j++) {
            if (start <= userInput[j] && userInput[j] <= finish && !hasCounted) {
                hasCounted = true;
            }
        }
        if (!hasCounted) {
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

function toggleResultPopup() {
    element = document.getElementById("overlay");
    element.style.visibility = (element.style.visibility === "visible") ? "hidden" : "visible";
}

function generateRhythmSheet(solutionTrack) {
    for (var i = 0; i < solutionTrack.length; i++) {
        rhythmSheet[0] = 0;
        rhythmSheet[i + 1] = rhythmSheet[i] + solutionTrack[i].duration;
        if (solutionTrack[i].type === "rest") {
            rests.push(rhythmSheet[i], solutionTrack[i].duration);
        } else if (solutionTrack[i].type === "note") {
            notes.push(rhythmSheet[i]);
        }
    }
}

function start() {
    for (var i = 0; i < solutionTrack.length; i++) {
        tempNote = solutionTrack[i];
        countedBeat = checkBarLineType(tempNote);
        var element = document.getElementById("solutionTrackDisplay");
        element.appendChild(para);
    }
    countdown();
}

function checkBarLineType(tempNote) {
    if (countedBeat + tempNote.duration >= 4000) {
        if (countedBeat + tempNote.duration > 4000) {
            appendTieOver(tempNote);
        } else if (countedBeat + tempNote.duration === 4000) {
            appendBarLine(tempNote);
        }
    } else {
        checkNote(tempNote.duration, tempNote.type);
        countedBeat = countedBeat + tempNote.duration;
    }
    return countedBeat;
}

function appendTieOver(tempNote) {
    var remainder;
    var otherRemainder;
    remainder = countedBeat + tempNote.duration - 4000;
    otherRemainder = tempNote.duration - remainder;
    checkNote(otherRemainder, tempNote.type);
    text = document.createTextNode(" V ");
    para.appendChild(text);
    checkNote(remainder, tempNote.type);
    countedBeat = remainder;
}

function appendBarLine(tempNote) {
    checkNote(tempNote.duration, tempNote.type);
    text = document.createTextNode(" ' ");
    para.appendChild(text);
    countedBeat = 0;
}

function checkNote(duration, type) {
    if (duration == 4000) {
        if (type == "rest") {
            text = document.createTextNode("W");
        } else if (type == "note") {
            text = document.createElement("img");
            text.setAttribute("src", "images/whole_note.png");
        }
    } else if (duration == 3000) {
        if (type == "rest") {
            text = document.createTextNode("D");
        } else if (type == "note") {
            text = document.createTextNode("d");
        }
    } else if (duration == 2000) {
        if (type == "rest") {
            text = document.createTextNode("H");
        } else if (type == "note") {
            text = document.createElement("img");
            text.setAttribute("src", "images/half_note.png");
        }
    } else if (duration == 1000) {
        if (type == "rest") {
            text = document.createTextNode("Q");
        } else if (type == "note") {
            text = document.createElement("img");
            text.setAttribute("src", "images/quarter_note.png");
        }
    } else if (duration == 500) {
        if (type == "rest") {
            text = document.createTextNode("E");
        } else if (type == "note") {
            text = document.createElement("img");
            text.setAttribute("src", "images/eighth_note.png");
        }
    } else if (duration == 250) {
        if (type == "rest") {
            text = document.createTextNode("S");
        } else if (type == "note") {
            text = document.createElement("img");
            text.setAttribute("src", "images/sixteenth_note.png");
        }
    }
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

function accurateTimer() {
    var start = new Date().getTime();
    elapsed = '0.0';
    window.setInterval(function () {
        var time = new Date().getTime() - start;
        elapsed = Math.floor(time);
    }, 10);
}
function Track(notes, difficulty, unlocked)
{
    this.notes = notes;
    this.difficulty = difficulty;
    this.unlocked = unlocked;

}
function appendToDiv() {
    var para = document.createElement("p");
    var node = document.createTextNode(elapsed);
    userInput.push(elapsed);
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

function populateList() {
    for (var i = 0; i < tracks.length; i++) {
        var para = document.createElement("p");
        var node = document.createTextNode("Track" + (i + 1) + (tracks[i].unlocked ? "" : " Locked!"));
        para.appendChild(node);
        var difficulty = document.createElement("p");
        for(var j = 0; j < 5; j++) {
            if(j < tracks[i].difficulty) {
                difficulty.innerHTML += "&#9733";
            } else {
                difficulty.innerHTML += "&#9734";
            }
        }
        para.appendChild(difficulty);
        var element = document.getElementById("trackList");
        element.appendChild(para);
        para.appendChild(document.createElement("br"));
    }
}
