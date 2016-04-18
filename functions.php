<?php
	class Notes{
	 	private $duration;
	 	private $type;
	 
	 	function __construct($duration, $type){	
	 		$this->duration = $duration;
	 		$this->type = $type;
	 	}

		function duration(){
			return $this->duration;
		}

		function type(){
			return $this->type;
		}
	}
	 
	$wRest = new Notes(4000, "rest");
	$hRest = new Notes(2000, "rest");
	$qRest = new Notes(1000, "rest");
	$eRest = new Notes(500, "rest");
	$sRest = new Notes(250, "rest");
	$dhRest = new Notes(3000, "rest");
	$qdRest = new Notes(1500, "rest");
	$deRest = new Notes(750, "rest");
	$dsRest = new Notes(375, "rest");
	$tqRest = new Notes(667, "rest");
	$teRest = new Notes(333, "rest");
	$tsRest = new Notes(167, "rest");
	 
	$wNote = new Notes(4000, "note");
	$hNote = new Notes(2000, "note");
	$qNote = new Notes(1000, "note");
	$eNote = new Notes(500, "note");
	$sNote = new Notes(250, "note");
	$dhNote = new Notes(3000, "note");
	$qdNote = new Notes(1500, "note");
	$deNote = new Notes(750, "note");
	$dsNote = new Notes(375, "note");
	$tqNote = new Notes(667, "note");
	$teNote = new Notes(333, "note");
	$tsNote = new Notes(167, "note");   
	$topOfRestQueue;
	$topOfRestQueueDuration;
	$notes = array();
	$rests = array();
	$topOfQueue;
	$solutionTrack = array();
	define("BUFFER", 200);
	define("NUMBER_OF_MEASURES", 4);
	define("MEASURE_DURATION_MS", 4000);
	$elapsed = 0;
	$accurateHits = 0;
	$trackEnded = false;
	$trackStarted = false; 
?> 
 
<script>
	var metronomeTrack = new Audio("audio/metronome_click_60bpm.mp3");
	var bongo = new Audio("audio/Bongo.mp3");
	var shush = new Audio("audio/Shush.wav");
</script>

<?php
 	class Measure {
 		private $imageUrl;
 		private $notes = array();
 
 		function __construct($imageUrl, $notes) {
 			$this->imageUrl = $imageUrl;
 			$this->notes = $notes;
 		}
 
 		function imageUrl() {
 			return $this->imageUrl;
 		}
 
 		function notes() {
 			return $this->notes;
 		}
 	}
 
 	$q1 = new Measure("q1.jpg", array($qNote, $qNote, $qNote, $qNote));
 	$q2 = new Measure("q2.jpg", array($hNote, $qNote, $qNote));
 	$q3 = new Measure("q3.jpg", array($qNote, $qNote, $hNote));
 	$q4 = new Measure("q4.jpg", array($qNote, $hNote, $qNote));
 	$q5 = new Measure("q5.jpg", array($qNote, $qRest, $hNote));
 	$q6 = new Measure("q6.jpg", array($qRest, $qNote, $hNote));
 	$q7 = new Measure("q7.jpg", array($qNote, $qNote, $qRest, $qNote));
 	$q8 = new Measure("q8.jpg", array($qNote, $qNote, $qNote, $qRest));
 	$q9 = new Measure("q9.jpg", array($qRest, $qNote, $hNote));
 	$q10 = new Measure("q10.jpg", array($qRest, $qNote, $qNote, $qNote));
 	$q11 = new Measure("q11.jpg", array($qNote, $hNote, $qNote));
 	$q12 = new Measure("q12.jpg", array($hNote, $qRest, $qNote));
 	$w1 = new Measure("w1.jpg", array($wNote));
 	$w2 = new Measure("w2.jpg", array($wRest));
 	$h1 = new Measure("h1.jpg", array($hNote, $hNote));
 	$h2 = new Measure("h2.jpg", array($hNote, $hRest));
 	$h3 = new Measure("h3.jpg", array($hRest, $hNote));
 	$h4 = new Measure("h4.jpg", array($hRest, $hRest));
 	$hd1 = new Measure("hd1.jpg", array($dhNote, $qNote));
 	$hd2 = new Measure("hd2.jpg", array($dhNote, $qNote));
 	$hd3 = new Measure("hd3.jpg", array($qNote, $dhNote));
 	$hd4 = new Measure("hd4.jpg", array($qNote, $dhNote));
 	$hd5 = new Measure("hd5.jpg", array($qNote, $dhNote));
 	$hd6 = new Measure("hd6.jpg", array($dhRest, $qNote));
 	$e1 = new Measure("e1.jpg", array($dhRest, $qNote));
 	$e2 = new Measure("e2.jpg", array($eNote,$eNote,$eNote,$eNote, $qNote, $eNote, $eNote));
 	$e3 = new Measure("e3.jpg", array($hRest,$eNote,$eNote,$qNote));
 	$e4 = new Measure("e4.jpg", array($eNote, $eNote, $qNote, $hRest));
 	$e5 = new Measure("e5.jpg", array($hRest, $eRest, $eNote, $eNote, $eNote));
 	$e6 = new Measure("e6.jpg", array($eNote, $eNote, $eNote, $eNote, $eNote, $eNote, $eNote, $eNote));
 	$e7 = new Measure("e7.jpg", array($qNote, $eNote, $eNote, $eNote, $eNote, $eNote, $eNote));
 	$e8 = new Measure("e8.jpg", array($eNote, $eNote, $qNote, $eNote, $eNote, $eNote, $eNote ));
 	$e9 = new Measure("e9.jpg", array($eNote, $eNote, $eNote, $eNote, $eNote, $eNote, $qNote));
 	$e10 = new Measure("e10.jpg", array($eNote, $eNote, $eNote, $eNote, $eNote, $hNote, $eNote));
 	$e11 = new Measure("e11.jpg", array($qNote, $qNote, $eNote, $eNote, $eNote, $eNote));
 	$e12 = new Measure("e12.jpg", array($eNote, $eNote, $eNote, $eNote, $qNote, $qNote));
 	$e13 = new Measure("e13.jpg", array($eNote, $eNote, $qNote, $qNote, $eNote, $eNote));
 	$e14 = new Measure("e14.jpg", array($eNote, $eNote, $qNote, $eNote, $eNote, $qNote));
 	$e15 = new Measure("e15.jpg", array($qNote, $eNote, $eNote, $qNote, $qNote));
 	$e16 = new Measure("e16.jpg", array($qNote, $qNote, $eNote, $eNote, $qNote));
 	$e17 = new Measure("e17.jpg", array($qNote, $qNote, $qNote, $eNote, $eNote));
 	$e18 = new Measure("e18.jpg", array($qNote, $eNote, $eNote, $qNote, $eNote, $eNote));
 	$e19 = new Measure("e19.jpg", array($eNote, $eNote, $qNote, $qRest, $eNote, $eNote));
 	$e20 = new Measure("e20.jpg", array($eNote, $eNote, $qRest, $hNote));
 	$e21 = new Measure("e21.jpg", array($eNote, $eNote, $qRest, $qRest, $eNote, $eNote));
 	$e22 = new Measure("e22.jpg", array($qNote, $qRest, $qNote, $eRest, $eRest));
 	$e23 = new Measure("e23.jpg", array($qNote, $qNote, $qNote, $eNote, $eNote));
 	$e24 = new Measure("e24.jpg", array($qNote, $qNote, $eNote, $eNote, $qNote));
 	$e25 = new Measure("e25.jpg", array($qNote, $eNote, $eNote, $qNote, $qNote));
 	$e26 = new Measure("e26.jpg", array($qNote, $eNote, $eNote, $eNote, $eNote, $qNote));
 	$e27 = new Measure("e27.jpg", array($eNote, $qNote, $eNote, $qRest));
 	$e28 = new Measure("e28.jpg", array($qNote, $qNote,$qNote,$eNote, $eNote));
 	$e29 = new Measure("e29.jpg", array($qNote, $qNote, $eNote, $eNote, $qNote));
 	$e30 = new Measure("e30.jpg", array($qNote, $eNote, $eNote, $qNote, $qNote));
 	$e31 = new Measure("e31.jpg", array($eNote, $eNote, $qNote, $qRest, $qNote));
 	$e32 = new Measure("e32.jpg", array($eNote, $eNote, $hNote, $eNote, $eNote));
 	$e33 = new Measure("e33.jpg", array($qNote, $eRest, $eNote, $hNote));
 	$e34 = new Measure("e34.jpg", array($qNote, $eRest, $eNote, $eRest, $eNote, $qNote));
 	$e35 = new Measure("e35.jpg", array($eNote, $eRest, $qNote,$qNote, $eRest, $eNote));
 	$e36 = new Measure("e36.jpg", array($qNote, $eRest,$eNote,$qNote, $qRest));
 	$e37 = new Measure("e37.jpg", array($qRest,$eRest, $eNote,$qNote,$qNote));
 	$e38 = new Measure("e38.jpg", array($eNote, $eNote, $qNote, $eNote,$eNote,$qRest));
    $e39 = new Measure("e39.jpg", array($qRest,$eNote,$eNote,$qRest,$eNote,$eNote));
    $e40 = new Measure("e40.jpg", array($qRest, $eRest, $eNote,$qRest, $eRest, $eNote));
    $e41 = new Measure("e41.jpg", array($qNote,$eNote,$eNote, $eRest,$eNote,$eNote,$eNote));
    $e42 = new Measure("e42.jpg", array($qNote, $eNote, $eNote, $eRest, $eNote, $eNote, $eNote));
    $e43 = new Measure("e43.jpg", array($eRest,$eNote, $qNote,$qNote, $eNote,$eNote));
    $qd1 = new Measure("qd1.jpg", array($qdNote, $eNote, $qNote, $qNote));
    $qd2 = new Measure("qd2.jpg", array($qdNote,$eNote,$hNote));
    $qd3 = new Measure("qd3.jpg", array($qNote, $qdNote, $eNote,$qNote));
    $qd4 = new Measure("qd4.jpg", array($qNote,$qNote,$qdNote, $eNote));
    $qd5 = new Measure("qd5.jpg", array($dhNote,$qNote));
    $qd6 = new Measure("qd6.jpg", array($qNote, $dhNote));
    $qd7 = new Measure("qd10.jpg", array($eNote,$eNote,$qdNote, $eNote,$qNote));
 
 	$solutionImages = array();
	$level1 = array($w1, $w2);
	$level2 = array($h1, $h2, $h3, $h4);
	$level3 = array($hd1, $hd2, $hd3, $hd4, $hd5, $hd6);
	$level4 = array($q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10, $q11, $q12);
	$levels = array($level1, $level2, $level3, $level4);
?> 
