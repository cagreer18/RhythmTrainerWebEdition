function isDone() {
    checker = setInterval(function() {
        if (elapsedTime == tempSolutionTrack[tempSolutionTrack.length - 1] + 1) {
            clearInterval(elapsed);
            elapsed = 0; 
            compareTracks();
            clearInterval(checker);
	}
    }, 500);
}

var percentage;
var letterGrade;
function compareTracks() {
	for(var i=0; i<=tempSolutionTrack.length-1; i++) {
		for(var j=0; j<=userGeneratedTrack.length-1;j++){
			if (tempSolutionTrack[i] == userGeneratedTrack[j]){
				accurateHits++;
			}
		}
	}
        percentage = accurateHits/tempSolutionTrack.length;
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
       document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + tempSolutionTrack.length + "\nThat's a(n): " + letterGrade;
}

function start(){
    document.getElementById("startButton").disabled = true;
    for (var i = 0; i < 4; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "images/quarter_note.png");
        image.setAttribute("width", 30);
        image.setAttribute("height", 30);
        var element = document.getElementById("trackDiv");
        element.appendChild(image);
    }
    countdown();
}

function countdown(){
    var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
    document.getElementById("countdown").style.display = "block";
        
    var count = 5;
    var timer = setInterval(
        function(){
            if(count > 0){
                document.getElementById("countdown").innerHTML = count;
                count--;
                metronomeTrack.play();
            } else {
                clearInterval(timer);
                metronomeTrack.pause();
                playTrack();
                document.getElementById("countdown").style.display = "none";
                
            }
        }, 1000);   
}

function playTrack(){
    document.getElementById("timestamp").innerHTML = "";
    var metronomeTrack = new Audio("audio/60bpmBoroqueGuitar.mp3");
    metronomeTrack.play();
    var playHead = setInterval(incrementTime, 1000);
}

function incrementTime() {
	 elapsedTime++;	 
}

function showDiv() {
	var para = document.createElement("p");
	var node = document.createTextNode(elapsedTime);
	userGeneratedTrack.push(elapsedTime);
	para.appendChild(node);
	
	var element = document.getElementById("timestamp");
	element.appendChild(para);
}

function Track(BPM) {
        this.BPM;
        this.notes;
        this.solutionTrack = [];
	WNote = Notes.WHOLE_NOTE / BPM;
	QNote = Notes.QUARTER_NOTE / BPM;
	HNote = Notes.HALF_NOTE / BPM;
	ENote = Notes.EIGHTH_NOTE / BPM;
	SNote = Notes.SIXTENTH_NOTE / BPM;
	DHNote = Notes.DOTED_HALF_NOTE / BPM;
	DQNote = Notes.DOTED_QUARTER_NOTE / BPM;
	DENote = Notes.DOTED_EIGHTH_NOTE / BPM;
	DSNote = Notes.DOTED_SIXTENTH_NOTE / BPM;
	TQNote = Notes.TRIPLET_QUARTER_NOTE / BPM;
	TENote = Notes.TRIPLET_EIGHTH_NOTE / BPM;
	TSNote = Notes.TRIPLET_SIXENTH_NOTE / BPM;
        
        Track.prototype.generateSolutionTrack = function(){
            for(i=0; i<this.notes.length; i++) {
		if(i==0) {
                       this.solutionTrack[i] = this.notes[i];
		} else {
			this.solutionTrack[i] = this.notes[i] + this.solutionTrack[i-1];
		}
                
            }
        return this.solutionTrack;
        };
}



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

//example of creating a new Track object.
var track1 = new Track(60);
track1.notes = [track1.QNote,track1.QNote,track1.QNote, track1.QNote]
track1.generateSolutionTrack();

var notes;
var userGeneratedTrack = [];

var myTimer;
var checker;
var accurateHits = 0;
var countdown;
var elapsed;
var tempSolutionTrack = [1,2,3,4];
var countdownTimer = 5;
var elapsedTime = 0;
