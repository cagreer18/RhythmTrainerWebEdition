function isDone() {
	checker = setInterval(function() {
		if (elapsedTime == tempSolutionTrack[tempSolutionTrack.length-1] + 1) {
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
        } else if (percentage <= .7) {
            letterGrade = 'D';
        } else if (percentage <= .8) {
            letterGrade = 'C';
        } else if (percentage <= .9) {
            letterGrade = 'B';
        } else if (percentage <= 1.0) {
            letterGrade = 'A';
        } else {
            letterGrade = null;
        }
       document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + tempSolutionTrack.length + "\nThat's a(n): " + letterGrade;
}

function start(){
    countdown();
}

function countdown(){
    var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
        
    var count = 5;
    var timer = setInterval(
        function(){
            if(count > 0){
                document.getElementById("timeDIV").innerHTML = count;
                count--;
                metronomeTrack.play();
            } else {
                clearInterval(timer);
                metronomeTrack.pause();
                playTrack();
                document.getElementById("timeDIV").innerHTML = 0;
            }
        }, 1000);   
}

function playTrack(){
    document.getElementById("timeDIV").innerHTML = "";
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
	
	var element = document.getElementById("timeDIV");
	element.appendChild(para);
}

function Track(BPM) {
        this.BPM;
        this.notes;
        this.solutionTrack = []
	this.WNote = 240000 / BPM;
	this.QNote = 60000 / BPM;
	this.HNote = 120000 / BPM;
	this.ENote = 30000 / BPM;
	this.SNote = 15000 / BPM;
	this.DHNote = 180000 / BPM;
	this.DQNote = 90000 / BPM;
	this.DENote = 45000 / BPM;
	this.DSNote = 225000 / BPM;
	this.TQNote = 40000 / BPM;
	this.TENote = 20000 / BPM;
	this.TSNote = 10000 / BPM;
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