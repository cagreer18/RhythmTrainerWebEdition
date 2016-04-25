var wRest = {
  duration: 4000,
  type: "rest"
};
var hRest = {
  duration: 2000,
  type: "rest"
};
var qRest = {
  duration: 1000,
  type: "rest"
};
var eRest = {
  duration: 500,
  type: "rest"
};
var sRest = {
  duration: 250,
  type: "rest"
};
var dhRest = {
  duration: 3000,
  type: "rest"
};
var qdRest = {
  duration: 1500,
  type: "rest"
};
var deRest = {
  duration: 750,
  type: "rest"
};
var dsRest = {
  duration: 375,
  type: "rest"
};
var tqRest = {
  duration: 667,
  type: "rest"
};
var teRest = {
  duration: 333,
  type: "rest"
};
var tsRest = {
  duration: 167,
  type: "rest"
};

var wNote = {
  duration: 4000,
  type: "note"
};
var hNote = {
  duration: 2000,
  type: "note"
};
var qNote = {
  duration: 1000,
  type: "note"
};
var eNote = {
  duration: 500,
  type: "note"
};
var sNote = {
  duration: 250,
  type: "note"
};
var dhNote = {
  duration: 3000,
  type: "note"
};
var qdNote = {
  duration: 1500,
  type: "note"
};
var deNote = {
  duration: 750,
  type: "note"
};
var dsNote = {
  duration: 375,
  type: "note"
};
var tqNote = {
  duration: 667,
  type: "note"
};
var teNote = {
  duration: 333,
  type: "note"
};
var tsNote = {
  duration: 167,
  type: "note"
};

var notes = [];
var rests = [];
var rhythmSheet = [];
var topOfQueue;

var solutionTrack = [];
var text;
var buffer = 150;
var elapsed;
var checker;
var accurateHits = 0;
var trackEnded = false;
var trackStarted = false;
var metronomeTrack = new Audio("audio/metronome_click_60bpm.mp3");
var para = document.createElement("p");
para.setAttribute("class", "notes");

var q1 = {
  image: "q1.jpg",
  note: [qNote, qNote, qNote, qNote]
};
var q2 = {
  image: "q2.jpg",
  note: [hNote, qNote, qNote]
};
var q3 = {
  image: "q3.jpg",
  note: [qNote, qNote, hNote]
};
var q4 = {
  image: "q4.jpg",
  note: [qNote, hNote, qNote]
};
var q5 = {
  image: "q5.jpg",
  note: [qNote, qRest, hNote]
};
var q6 = {
  image: "q6.jpg",
  note: [qRest, qNote, hNote]
};
var q7 = {
  image: "q7.jpg",
  note: [qNote, qNote, qRest, qNote]
};
var q8 = {
  image: "q8.jpg",
  note: [qNote, qNote, qNote, qRest]
};
var q9 = {
  image: "q9.jpg",
  note: [qRest, qNote, hNote]
};
var q10 = {
  image: "q10.jpg",
  note: [qRest, qNote, qNote, qNote]
};
var q11 = {
  image: "q11.jpg",
  note: [qNote, hNote, qNote]
};
var q12 = {
  image: "q12.jpg",
  note: [hNote, qRest, qNote]
};
var w1 = {
  image: "w1.jpg",
  note: [wNote]
};
var w2 = {
  image: "w2.jpg",
  note: [wRest]
};
var h1 = {
  image: "h1.jpg",
  note: [hNote, hNote]
};
var h2 = {
  image: "h2.jpg",
  note: [hNote, hRest]
};
var h3 = {
  image: "h3.jpg",
  note: [hRest, hNote]
};
var h4 = {
  image: "h4.jpg",
  note: [hRest, hRest]
};
var hd1 = {
  image: "hd1.jpg",
  note: [dhNote, qNote]
};
var hd2 = {
  image: "hd2.jpg",
  note: [dhNote, qNote]
};
var hd3 = {
  image: "hd3.jpg",
  note: [qNote, dhNote]
};
var hd4 = {
  image: "hd4.jpg",
  note: [qNote, dhNote]
};
var hd5 = {
  image: "hd5.jpg",
  note: [qNote, dhNote]
};
var hd6 = {
  image: "hd6.jpg",
  note: [dhRest, qNote]
};
var e1 = {
  image: "e1.jpg",
  note: [hNote, qNote, eNote, eNote]
};
var e2 = {
  image: "e2.jpg",
  note: [eNote, eNote, eNote, eNote, qNote, eNote, eNote]
};
var e3 = {
  image: "e3.jpg",
  note: [hRest, eNote, eNote, qNote]
};
var e4 = {
  image: "e4.jpg",
  note: [eNote, eNote, qNote, hRest]
};
var e5 = {
  image: "e5.jpg",
  note: [hRest, eRest, eNote, eNote, eNote]
};
var e6 = {
  image: "e6.jpg",
  note: [eNote, eNote, eNote, eNote, eNote, eNote, eNote, eNote]
};
var e7 = {
  image: "e7.jpg",
  note: [qNote, eNote, eNote, eNote, eNote, eNote, eNote]
};
var e8 = {
  image: "e8.jpg",
  note: [eNote, eNote, qNote, eNote, eNote, eNote, eNote]
};
var e9 = {
  image: "e9.jpg",
  note: [eNote, eNote, eNote, eNote, eNote, eNote, qNote]
};
var e10 = {
  image: "e10.jpg",
  note: [eNote, eNote, eNote, eNote, eNote, qNote, eNote]
};
var e11 = {
  image: "e11.jpg",
  note: [qNote, qNote, eNote, eNote, eNote, eNote]
};
var e12 = {
  image: "e12.jpg",
  note: [eNote, eNote, eNote, eNote, qNote, qNote]
};
var e13 = {
  image: "e13.jpg",
  note: [eNote, eNote, qNote, qNote, eNote, eNote]
};
var e14 = {
  image: "e14.jpg",
  note: [eNote, eNote, qNote, eNote, eNote, qNote]
};
var e15 = {
  image: "e15.jpg",
  note: [qNote, eNote, eNote, qNote, qNote]
};
var e16 = {
  image: "e16.jpg",
  note: [qNote, qNote, eNote, eNote, qNote]
};
var e17 = {
  image: "e17.jpg",
  note: [qNote, qNote, qNote, eNote, eNote]
};
var e18 = {
  image: "e18.jpg",
  note: [qNote, eNote, eNote, qNote, eNote, eNote]
};
var e19 = {
  image: "e19.jpg",
  note: [eNote, eNote, qNote, qRest, eNote, eNote]
};
var e20 = {
  image: "e20.jpg",
  note: [eNote, eNote, qRest, hNote]
};
var e21 = {
  image: "e21.jpg",
  note: [eNote, eNote, qRest, qRest, eNote, eNote]
};
var e22 = {
  image: "e22.jpg",
  note: [qNote, qRest, qNote, eRest, eRest]
};
var e23 = {
  image: "e23.jpg",
  note: [qNote, qNote, qNote, eNote, eNote]
};
var e24 = {
  image: "e24.jpg",
  note: [qNote, qNote, eNote, eNote, qNote]
};
var e25 = {
  image: "e25.jpg",
  note: [qNote, eNote, eNote, qNote, qNote]
};
var e26 = {
  image: "e26.jpg",
  note: [qNote, eNote, eNote, eNote, eNote, qNote]
};
var e27 = {
  image: "e27.jpg",
  note: [eNote, qNote, eNote, qRest]
};
var e28 = {
  image: "e28.jpg",
  note: [qNote, qNote, qNote, eNote, eNote]
};
var e29 = {
  image: "e29.jpg",
  note: [qNote, qNote, eNote, eNote, qNote]
};
var e30 = {
  image: "e30.jpg",
  note: [qNote, eNote, eNote, qNote, qNote]
};
var e31 = {
  image: "e31.jpg",
  note: [eNote, eNote, qNote, qRest, qNote]
};
var e32 = {
  image: "e32.jpg",
  note: [eNote, eNote, hNote, eNote, eNote]
};
var e33 = {
  image: "e33.jpg",
  note: [qNote, eRest, eNote, hNote]
};
var e34 = {
  image: "e34.jpg",
  note: [qNote, eRest, eNote, eRest, eNote, qNote]
};
var e35 = {
  image: "e35.jpg",
  note: [eNote, eRest, qNote, qNote, eRest, eNote]
};
var e36 = {
  image: "e36.jpg",
  note: [qNote, eRest, eNote, qNote, qRest]
};
var e37 = {
  image: "e37.jpg",
  note: [qRest, eRest, eNote, qNote, qNote]
};
var e38 = {
  image: "e38.jpg",
  note: [eNote, eNote, qNote, eNote, eNote, qRest]
};
var e39 = {
  image: "e39.jpg",
  note: [qRest, eNote, eNote, qRest, eNote, eNote]
};
var e40 = {
  image: "e40.jpg",
  note: [qRest, eRest, eNote, qRest, eRest, eNote]
};
var e41 = {
  image: "e41.jpg",
  note: [qNote, eNote, eNote, eRest, eNote, eNote, eNote]
};
var e42 = {
  image: "e42.jpg",
  note: [qNote, eNote, eNote, eRest, eNote, eNote, eNote]
};
var e43 = {
  image: "e43.jpg",
  note: [eRest, eNote, qNote, qNote, eNote, eNote]
};
var qd1 = {
  image: "qd1.jpg",
  note: [qdNote, eNote, qNote, qNote]
};
var qd2 = {
  image: "qd2.jpg",
  note: [qdNote, eNote, hNote]
};
var qd3 = {
  image: "qd3.jpg",
  note: [qNote, qdNote, eNote, qNote]
};
var qd4 = {
  image: "qd4.jpg",
  note: [qNote, qNote, qdNote, eNote]
};
var qd5 = {
  image: "qd5.jpg",
  note: [dhNote, qNote]
};
var qd6 = {
  image: "qd6.jpg",
  note: [qNote, dhNote]
};
var qd10 = {
  image: "qd10.jpg",
  note: [eNote, qNote, qNote, qdNote]
};
var qd11 = {
  image: "qd11.jpg",
  note: [qRest, qRest, qdNote, eRest]
};
var qd12 = {
  image: "qd12.jpg",
  note: [qdRest, eNote, eRest, eNote, qRest]
};
var qd13 = {
  image: "qd13.jpg",
  note: [qdNote, eNote, qNote, qNote]
};
var s1 = {
  image: "s1.jpg",
  note: [qNote, qNote, sNote, sNote, sNote, sNote, qNote]
};
var s2 = {
  image: "s2.jpg",
  note: [qNote, qNote, qNote, sNote, sNote, sNote, sNote]
};
var s3 = {
  image: "s3.jpg",
  note: [eNote, sNote, sNote, qNote, eNote, sNote, sNote, qNote]
};
var s4 = {
  image: "s4.jpg",
  note: [qNote, eNote, qNote, sNote, sNote, sNote, sNote, sNote, sNote]
};
var s5 = {
  image: "s5.jpg",
  note: [eNote, sNote, sNote, qNote, qNote, qNote]
};
var s6 = {
  image: "s6.jpg",
  note: [sNote, sNote, sNote, sNote, qNote, qNote, qNote]
};
var s7 = {
  image: "s7.jpg",
  note: [qNote, eNote, sNote, sNote, qNote, qNote]
};
var s8 = {
  image: "s8.jpg",
  note: [sNote, sNote, sNote, sNote, qNote, eNote, eNote, sNote, sNote, sNote, sNote]
};
var s9 = {
  image: "s9.jpg",
  note: [qNote, eNote, eNote, eNote, sNote, sNote, qNote]
};
var s10 = {
  image: "s10.jpg",
  note: [sNote, sNote, sNote, sNote, eNote, eNote, sNote, sNote, sNote, sNote, qNote]
};
var s11 = {
  image: "s11.jpg",
  note: [eNote, eNote, qNote, qNote, eNote, sNote, sNote]
};
var s12 = {
  image: "s12.jpg",
  note: [qNote, eNote, eNote, qNote, sNote, sNote, sNote, sNote]
};
var s13 = {
  image: "s13.jpg",
  note: [eNote, sNote, sNote, sNote, sNote, eNote, qNote, eNote, eNote]
};
var s14 = {
  image: "s14.jpg",
  note: [sNote, eNote, sNote, sNote, sNote, sNote, sNote, qNote, qNote]
};
var s15 = {
  image: "s15.jpg",
  note: [qNote, eNote, eNote, sNote, sNote, eNote, eNote, sNote, sNote]
};
var s16 = {
  image: "s17.jpg",
  note: [sNote, sNote, sNote, sNote, qNote, hRest]
};
var s17 = {
  image: "s18.jpg",
  note: [sNote, sNote, eNote, qNote, qNote, qNote]
};
var s18 = {
  image: "s19.jpg",
  note: [qNote, qRest, sNote, sNote, sNote, sNote, eNote, sNote, sNote]
};
var s19 = {
  image: "s20.jpg",
  note: [qNote, sNote, sNote, eNote, qNote, qNote]
};
var s20 = {
  image: "s21.jpg",
  note: [qNote, qNote, sNote, sNote, eNote, qNote]
};
var s21 = {
  image: "s22.jpg",
  note: [qNote, qNote, qNote, sNote, sNote, eNote]
};
var s22 = {
  image: "s16.jpg",
  note: [sNote, sNote, eNote, eNote, sNote, sNote, qNote, eNote, eNote]
};
var s23 = {
  image: "s25.jpg",
  note: [sNote, sNote, sNote, sNote, qNote, hRest]
};
var s24 = {
  image: "s27.jpg",
  note: [sNote, sNote, eNote, qNote, qNote, qNote]
};
var s25 = {
  image: "s28.jpg",
  note: [qNote, qRest, sNote, sNote, sNote, sNote, eNote, sNote, sNote]
};
var s26 = {
  image: "s30.jpg",
  note: [qNote, sNote, sNote, eNote, qNote, qNote]
};
var s27 = {
  image: "s31.jpg",
  note: [qNote, qNote, sNote, sNote, eNote, qNote]
};
var s28 = {
  image: "s32.jpg",
  note: [qNote, qNote, qNote, sNote, sNote, eNote]
};
var de1 = {
  image: "de1.jpg",
  note: [eNote, sNote, sNote, eNote, eNote, deNote, sNote, qNote]
};
var de2 = {
  image: "de2.jpg",
  note: [qNote, qRest, deNote, sNote, eRest, eNote]
};
var de3 = {
  image: "de3.jpg",
  note: [deNote, sNote, qNote, qNote, qNote]
};
var de4 = {
  image: "de4.jpg",
  note: [deNote, sNote, sNote, sNote, eNote, qRest, qNote]
};
var de5 = {
  image: "de5.jpg",
  note: [deNote, deNote, sNote, sNote, eNote, eNote, sNote, sNote, eNote]
};
var de6 = {
  image: "de6.jpg",
  note: [deNote, sNote, qNote, deNote, sNote, qNote]
};
var de7 = {
  image: "de7.jpg",
  note: [sNote, deNote, qNote, sNote, deNote, eNote, eNote]
};
var de8 = {
  image: "de8.jpg",
  note: [qNote, sNote, deNote, eNote, sNote, sNote, deNote, sNote]
};
var de9 = {
  image: "de9.jpg",
  note: [qNote, deNote, sNote, qRest, sNote, deNote]
};
var de10 = {
  image: "de10.jpg",
  note: [qNote, deRest, sNote, qNote, qNote]
};
var de11 = {
  image: "de11.jpg",
  note: [qdNote, qNote, eNote, sNote, sNote, sNote, sNote]
};
var de12 = {
  image: "de13.jpg",
  note: [qNote, qRest, deRest, sNote, eNote, eNote]
};
var de13 = {
  image: "de14.jpg",
  note: [qNote, qRest, qRest, sRest, qdNote]
};

var level1 = [w1, w2];
var level2 = [h1, h2, h3, h4];
var level3 = [hd1, hd2, hd3, hd4, hd5, hd6];
var level4 = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
var level5 = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35, e36, e37, e38, e39, e40, e41, e42, e43];
var level6 = [qd1, qd2, qd3, qd4, qd5, qd6, qd10, qd11, qd12, qd13];
var level7 = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28];
var level8 = [de1, de2, de3, de4, de5, de6, de7, de8, de9, de10, de11, de12, de13];
var levels = [level1, level2, level3, level4, level5, level6, level7, level8];
var solutionImages = [];

// Used in isTrackDone() which is called onload() in index.php
function generateSolutionTrack() {

  for (var x = 0; x < 4; x++) {

    var randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex > 1) {
      var chosenLevel = levels[localStorage.selectedLevel - 1];
      var chosenMeasure = chosenLevel[Math.floor(Math.random() * chosenLevel.length)];
      for (var y = 0; y < chosenMeasure["note"].length; y++) {
        solutionTrack.push(chosenMeasure["note"][y]);
      }
      solutionImages.push(chosenMeasure["image"]);
    } else {
      var chosenLevel = levels[Math.floor(Math.random() * localStorage.selectedLevel)];
      var chosenMeasure = chosenLevel[Math.floor(Math.random() * chosenLevel.length)];
      for (var y = 0; y < chosenMeasure["note"].length; y++) {
        solutionTrack.push(chosenMeasure["note"][y]);
      }
      solutionImages.push(chosenMeasure["image"]);
    }
    console.log(chosenMeasure.image);
  }
}

// Called onload in index.php
function isTrackDone() {
  generateSolutionTrack();
  generateRhythmSheet(solutionTrack);
  checker = setInterval(function() {
    if (elapsed > rhythmSheet[rhythmSheet.length - 1] + 1) {
      elapsed = 0;
      compareTracks();
      toggleResultPopup();
      clearInterval(checker);
      trackEnded = true;
      metronomeTrack.pause();
    }
  }, 1);
}

// Called in isTrackDone() after the the track is expected to be over.
function compareTracks() {
  var percentage;
  var letterGrade;
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


// Used in isTrackDone() after the track is expected to be over and compareTracks() is finished
function toggleResultPopup() {
  element = document.getElementById("overlay");
  element.style.visibility = (element.style.visibility === "visible") ? "hidden" : "visible";
  if (element.style.visibility === "hidden") {
    location.href = 'TrackSelectScreen.php';
  }
}
// Used in isTrackDone() and generates a rhythm track after the solution track is determined
function generateRhythmSheet(solutionTrack) {
  rhythmSheet[0] = 1000;
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

// Used in changeActionButtonState is called only if the game has not started  
function start() {
  addImages();
  for (var i = 0; i < solutionTrack.length; i++) {
    var element = document.getElementById("solutionTrackDisplay");
    element.appendChild(para);
  }
  countdown();
}


// Used when the size is changed and when the images load
function resize() {
  var notes = document.getElementsByClassName("notation");
  for (var x = 0; x < notes.length; x++) {
    var newImage = new Image();
    newImage.src = notes[x].getAttribute("src");
    var width = document.body.clientWidth / 1366 * newImage.width;
    notes[x].style.width = width + "px";
  }
}

// Used in start() 
function addImages() {
  for (var x = 0; x < solutionImages.length; x++) {
    var barline = document.createElement("img");
    barline.setAttribute("class", "notation");
    switch (x) {
      case 0:
        barline.setAttribute("src", "images/perc_clef.jpg");
        para.appendChild(barline);
        barline = document.createElement("img");
        barline.setAttribute("class", "notation");
        barline.setAttribute("src", "images/4-4_time_signature_1.jpg");
        para.appendChild(barline);
        break;
      case 1:
        barline.setAttribute("src", "images/bar_line.jpg");
        para.appendChild(barline);
        break;
      case 2:
        barline.setAttribute("src", "images/bar_line.jpg");
        para.appendChild(barline);
        para.appendChild(document.createElement("br"));
        barline = document.createElement("img");
        barline.setAttribute("class", "notation");
        barline.setAttribute("src", "images/perc_clef.jpg");
        para.appendChild(barline);
        break;
      case 3:
        barline.setAttribute("src", "images/bar_line.jpg");
        para.appendChild(barline);
        break;
      default:
        break;

    }
    var measure = document.createElement("img");
    measure.setAttribute("class", "notation");
    measure.setAttribute("src", "images/" + solutionImages[x]);
    measure.setAttribute("onload", "resize()");
    para.appendChild(measure);
  }
  barline = document.createElement("img");
  barline.setAttribute("class", "notation");
  barline.setAttribute("src", "images/bar_line_final.jpg");
  barline.setAttribute("onload", "resize()");
  para.appendChild(barline);
}

// Used at the end of start()
function countdown() {
  document.getElementById("countdown").style.display = "block";
  var countdownTimer = 1;
  var timer = setInterval(
    function() {
      if (countdownTimer < 4) {
        document.getElementById("countdown").innerHTML = countdownTimer;
        countdownTimer++;
        metronomeTrack.play();
      } else {
        clearInterval(timer);
        playTrack();
        document.getElementById("actionButton").disabled = false;
      }
    }, 1000);
}

// Used after the countdown is finished in countdown()
function playTrack() {
  document.getElementById("timestamp").innerHTML = "";
  accurateTimer();
}

// Called after the retry button is pressed
function reloadPage() {
  location.reload();
}


// Used in playTrack() and to represent elapsedTime
function accurateTimer() {
  var start = new Date().getTime();
  elapsed = '0.0';
  window.setInterval(function() {
    var time = new Date().getTime() - start;
    elapsed = Math.floor(time);
  }, 10);
}

// Called in index.php in order to populate the game screen
var topOfRestQueue;
var topOfRestQueueDuration;

function appendToDiv() {
  var currentInput = elapsed;
  while (currentInput >= topOfQueue - buffer) {
    if (currentInput >= (topOfQueue - buffer) && currentInput <= (topOfQueue + buffer)) {
      accurateHits++;
      var bongo = new Audio("audio/Bongo.wav");
      bongo.play();
    }
    topOfQueue = notes.shift();
  }
  while (currentInput >= topOfRestQueue) {
    if (topOfRestQueue <= currentInput && currentInput < topOfRestQueue + (topOfRestQueueDuration - 200)) {
      accurateHits--;
      var shush = new Audio("audio/Shush.wav");
      shush.play();
    }
    topOfRestQueue = rests.shift();
    topOfRestQueueDuration = rests.shift();
  }
}

window.addEventListener('keydown', function(event) {
  if (trackEnded === true) {} else if (trackStarted && event.keyCode == 32) {
    appendToDiv();
  }
}, false);


// Called onclick of the 'actionButton'
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


// Called on load to create the list in TrackSelect.html
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
      case 4:
        levelNote = "Eighth Note";
        thumbnail = "e1.jpg";
        break;
      case 5:
        levelNote = "Dotted Quarter Note";
        thumbnail = "qd1.jpg";
        break;
      case 6:
        levelNote = "Sixteenth Note";
        thumbnail = "s1.jpg";
        break;
      case 7:
        levelNote = "Dotted Eighth Note";
        thumbnail = "de1.jpg";
        break;
      default:
        break;
    }
    var node = document.createTextNode("Level " + (i + 1) + " " + levelNote);
    para.appendChild(node);
    var imgNode = document.createElement("input");
    imgNode.setAttribute("type", "image");
    imgNode.setAttribute("src", "images/" + thumbnail);
    imgNode.setAttribute("class", "notation");
    imgNode.setAttribute("onload", "resize()");
    imgNode.setAttribute("id", i + 1);



    var element = document.getElementById("trackList");
    element.appendChild(para);
    element.appendChild(imgNode);
    para.appendChild(document.createElement("br"));
    imgNode.onclick = function() {
      localStorage.selectedLevel = this.id;
      location.href = 'index.php';
    };
  }
}
