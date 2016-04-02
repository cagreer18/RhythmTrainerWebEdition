<?php 

class Notes{
	$duration;
	$type;

	function __construct($duration, $type){	
		$this->duration = $duration;
		$this->type = $type;
	}

	function duration(){
		return $duration;
	}

	function type(){
		return $type;
	}
}

$wRest = new Notes(4000, "rest");
$hRest = new Notes(2000, "rest");
$qRest = new Notes(1000, "rest");
$eRest = new Notes(500, "rest");
$sRest = new Notes(250, "rest");
$dhRest = new Notes(3000, "rest");
$dqRest = new Notes(1500, "rest");
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
$dqNote = new Notes(1500, "note");
$deNote = new Notes(750, "note");
$dsNote = new Notes(375, "note");
$tqNote = new Notes(667, "note");
$teNote = new Notes(333, "note");
$tsNote = new Notes(167, "note");   

$notes = array();
$rests = array();
$userInput = array();
$rhythmSheet = array();
$topOfQueue;
$solutionTrack = array();
$text;
define("BUFFER", 200);
$elapsed;
$checker;
$percentage;
$letterGrade;
$countedBeat = 0;
$accurateHits = 0;
$trackEnded = false;
$trackStarted = false;

?> 

<script>
var para = document.createElement("p");
var para.setAttribute("class", "notes");

var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
var bongo = new Audio("audio/Bongo.mp3");
var shush = new Audio("audio/Shush.wav");
</script>
<?php
	class Measure {
		$imageUrl;
		$notes = array();

		function __construct($imageUrl, $notes) {
			$this->imageUrl = $imageUrl;
			$this->notes = $notes;
		}

		function imageUrl() {
			return $imageUrl;
		}

		function notes() {
			return $notes;
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

	$level1 = array($w1, $w2);
	$level2 = array($h1, $h2, $h3, $h4);
	$level3 = array($hd1, $hd2, $hd3, $hd4, $hd5, $hd6);
	$level4 = array($q1, $q2, $q3, $q4, $q5, $q6, $q7, $q8, $q9, $q10, $q11, $q12);
	$levels = array($level1, $level2, $level3, $level4);
	$solutionImages = array();
?>