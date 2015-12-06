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

function compareTracks() {
     var z = 0;
    for(x in tempSolutionTrack){ 
        z++;
        if(x === userGeneratedTrack[z]){
            accurateHits++;
        }
    }
    document.getElementById("result").innerHTML = "You got: " + accurateHits + "/" + tempSolutionTrack.length;
}