<?php 
 
 class Notes{
 	public $duration;
 	public $type;
 
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
 var para = document.createElement("p");
 para.setAttribute("class", "notes");
 
 var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
 var bongo = new Audio("audio/Bongo.mp3");
 var shush = new Audio("audio/Shush.wav");
 </script>
 <?php
 	class Measure {
 		public $imageUrl;
 		public $notes = array();
 
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
 
 	$solutionImages = array();
 ?> 
