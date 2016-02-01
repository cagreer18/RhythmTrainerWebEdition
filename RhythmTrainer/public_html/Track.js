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
        
      
        
        
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


