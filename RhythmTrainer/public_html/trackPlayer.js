var elapsedTime = 0;

function start(){
    countdown();
}

function countdown(){
    var metronomeTrack = new Audio("audio/4-4_60bpmMetronome.mp3");
    metronomeTrack.play();
    
    var count = 5;
    document.getElementById("countdown").innerHTML = count;
   
    var timer = setInterval(
        function(){
            if(count > 0){
                document.getElementById("countdown").innerHTML = count;
                count--;
            } else {
                clearInterval(timer);
                metronomeTrack.pause();
                playTrack();
            }
        }, 1000);
    
}

function playTrack(){
    var metronomeTrack = new Audio("audio/60bpmBoroqueGuitar.mp3");
    var playHead = setInterval(incrementTime, 1000);
}
