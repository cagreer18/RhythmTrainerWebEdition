


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
function isDone() {
    checker = setInterval(function() {
        if (elapsed - 300 > track1.solutionTrack[track1.solutionTrack.length - 1] + 1) {
            clearInterval(elapsed);
            elapsed = 0; 
            compareTracks();
            toggleResultPopup();
            clearInterval(checker);
	}
    }, 1);
}




var percentage;
var letterGrade;
function compareTracks() {
    for(var i = 0; i<=userGeneratedTrack.length-1; i++)
    {
        userGeneratedTrack[i] = userGeneratedTrack[i] - 150;
     

       
    }
    
    var count = 0;
	for(var i=0; i<=track1.solutionTrack.length-1; i++) {
		for(var j=count; j<=userGeneratedTrack.length-1;j++){
			if ((track1.solutionTrack[i] >= userGeneratedTrack[j] - 200)&&(track1.solutionTrack[i] <= userGeneratedTrack[j]+200)){
				accurateHits++;
                                count = j+1;
                                
                                break;
			}
                        
		}
	}
        percentage = accurateHits/track1.solutionTrack.length;
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
       document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + track1.solutionTrack.length + "\nThat's a(n): " + letterGrade;
}

function start(){
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
                playTrack();
                document.getElementById("countdown").style.display = "none";
                
            }
        }, 1000);   
}

function playTrack(){
    document.getElementById("timestamp").innerHTML = "";
    accurateTimer();
}

function incrementTime() {
	 elapsedTime++;	 
}
function accurateTimer(){
var start = new Date().getTime();
    elapsed = '0.0';

window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time);
    

    document.title = elapsed;
    
}, 10);
}

function appendToDiv() {
	var para = document.createElement("p");
	var node = document.createTextNode(elapsed);
	userGeneratedTrack.push(elapsed);
	para.appendChild(node);
	
	var element = document.getElementById("timestamp");
	element.appendChild(para);
}

function toggleResultPopup() {
    element = document.getElementById("overlay");
    element.style.visibility = (element.style.visibility == "visible") ? "hidden" : "visible";
}
function Track(BPM) {
        this.BPM;
        this.notes;
        this.solutionTrack = [];
	this.WNote = Notes.WHOLE_NOTE / BPM;
	this.QNote = Notes.QUARTER_NOTE / BPM;
	this.HNote = Notes.HALF_NOTE / BPM;
	this.ENote = Notes.EIGHTH_NOTE / BPM;
	this.SNote = Notes.SIXTENTH_NOTE / BPM;
	this.DHNote = Notes.DOTED_HALF_NOTE / BPM;
	this.DQNote = Notes.DOTED_QUARTER_NOTE / BPM;
	this.DENote = Notes.DOTED_EIGHTH_NOTE / BPM;
	this.DSNote = Notes.DOTED_SIXTENTH_NOTE / BPM;
	this.TQNote = Notes.TRIPLET_QUARTER_NOTE / BPM;
	this.TENote = Notes.TRIPLET_EIGHTH_NOTE / BPM;
	this.TSNote = Notes.TRIPLET_SIXENTH_NOTE / BPM;
        
        Track.prototype.generateSolutionTrack = function(){
            for(i=0; i<this.notes.length-1; i++) {
                this.solutionTrack[0] = 0;
		
			this.solutionTrack[i+1] = this.solutionTrack[i] + this.notes[i];
		
                
            }
        return this.solutionTrack;
        };
}




var notes;
var userGeneratedTrack = [];

var myTimer;
var checker;
var accurateHits = 0;
var countdown;
var elapsed;
var tempSolutionTrack = [1000,2000,2250,2500,3000,4000];
var countdownTimer = 5;
var elapsedTime = 0;
var track1 = new Track(60);
track1.notes = [track1.QNote,track1.SNote,track1.SNote, track1.ENote, track1.QNote, track1.QNote];
track1.generateSolutionTrack();

window.addEventListener('keydown',function(event){
    if(event.keyCode === 32){
        appendToDiv();
    }
},false);
    
    
var trackStarted = false;
function actionPerformed(){
    if(trackStarted === false){
        start();
        trackStarted = true;
        document.getElementById("actionButton").textContent = "Click Me";
    } else if(trackStarted === true){
        appendToDiv();
    }
}
