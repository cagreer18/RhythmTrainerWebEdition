function isDone() {
	checker = setInterval(function() {
		if (elapsedTime == tempSolutionTrack[tempSolutionTrack.length-1]) {
			clearInterval(elapsed);
			elapsed = 0; 
			compareTracks();
			clearInterval(checker);
		}
	}, 500); 
}

function compareTracks() {
	for(var i=0; i<=tempSolutionTrack.length-1; i++) {
		for(var j=0; j<=userGeneratedTrack.length-1;j++){
			if (tempSolutionTrack[i] == userGeneratedTrack[j]){
				accurateHits++;
			}
		}
	}
	document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + tempSolutionTrack.length;
}

function start() {
countdown = setInterval(beginCountdown, 1000);
}

function beginCountdown() {
	if(countdownTimer >= 0) {
		document.getElementById("timeDIV").innerHTML = countdownTimer;
		countdownTimer--;
	} else if(countdownTimer < 0) {
		startTime();
    }	
}

function startTime() {
	var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
	metronomeTrack.play();
	clearInterval(countdown);
	elapsed = setInterval(incrementTime, 500);
}

function incrementTime() {
	 elapsedTime++;	 
}

function showDiv() {
	var para = document.createElement("p");
	var node = document.createTextNode(elapsedTime);
	userGeneratedTrack.push(elapsedTime);
	para.appendChild(node);
	
	var element = document.getElementById("timeDIV");
	element.appendChild(para);
}

function Track(BPM) {
	WNote = NotesEnum.WHOLE_NOTE / BPM;
	QNote = NotesEnum.QUARTER_NOTE / BPM;
	HNote = NotesEnum.HALF_NOTE / BPM;
	ENote = NotesEnum.EIGHTH_NOTE / BPM;
	SNote = NotesEnum.SIXTENTH_NOTE / BPM;
	DHNote = NotesEnum.DOTED_HALF_NOTE / BPM;
	DQNote = NotesEnum.DOTED_QUARTER_NOTE / BPM;
	DENote = NotesEnum.DOTED_EIGHTH_NOTE / BPM;
	DSNote = NotesEnum.DOTED_SIXTENTH_NOTE / BPM;
	TQNote = NotesEnum.TRIPLET_QUARTER_NOTE / BPM;
	TENote = NotesEnum.TRIPLET_EIGHTH_NOTE / BPM;
	TSNote = NotesEnum.TRIPLET_SIXENTH_NOTE / BPM;
}

function generateSolutionTrack() {
	Track(60);
	var notes = [QNote,QNote,QNote,QNote];
	for(i=0; i<notes.length; i++) {
		if(i==0) {
			solutionTrack[i] = notes[i];
		} else {
			solutionTrack[i] = notes[i] + solutionTrack[i-1];
		}
	}
}

var NotesEnum = {
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
}

var userGeneratedTrack=[];
var WNote;
var HNote;
var QNote;
var ENote;
var SNote;
var DQNote;
var DHNote;
var DENote;
var DENote;
var DSNote;
var TQNote;
var TENote;
var TSNote;
var myTimer;
var checker;
var accurateHits = 0;
var countdown;
var elapsed;
var solutionTrack = [];
var tempSolutionTrack = [0,2,4,6];
var countdownTimer = 5;
var elapsedTime = 0;