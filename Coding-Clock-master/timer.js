$(document).ready(function() {
    // Declare variables
    var timeCounter = 25;
    var breakCounter = 5;
    var pause = false;
    var secs = 0;
    var mins = 25;
    var counter;
    $('.bigTimer').html(mins + ":00");
        // This function plays a sound
        var x = document.getElementById("buzzer"); 
        function playAudio() { 
               $(document).ready(function(){         
           x.play(); 
               });}
    function countdown(){
        if (mins === 0 && secs === 8){
            playAudio();}
        if(mins === 0 && secs === 0){
            if($('.title').text() === 'WORK'){
            $('.title').text('BREAK');
            mins = breakCounter;
            $('.bigtimer').html(mins + ":0" + secs);}
        else if($('.title').text() === 'BREAK'){
            $('.title').text('WORK');
            mins = timeCounter;
            $('.bigtimer').html(mins + ":0" + secs);}}
        else {
            if(secs === 0){
            secs = 60; mins--}
            secs--;
            if(secs<10){$('.bigTimer').html(mins + ":0" + secs);}
            else{
                $('.bigTimer').html(mins + ":" + secs);
            }}}
    //THIS FUNCTION DECREASES THE BREAK COUNTER WHEN THE USER HITS THE MINUS BUTTON
    $('#minusBreak').click(function(){
        if(pause === false){ 
            if(breakCounter > 1) {
                breakCounter--;
                $("#smallTimer").html(breakCounter); 
                $('.title').text('WORK');
                $(".bigTimer").html(timeCounter + ":00");
                // reset 
                secs = 0;
                mins = timerCounter;
            }}});
    //THIS FUNCTION INCREASES THE BREAK TIMER WHEN THE USER HITS THE PLUS BUTTON
    $('#plusBreak').click(function(){
        if(pause === false){
            breakCounter++;
            $("#smallTimer").html(breakCounter); 
            $(".bigTimer").html(timeCounter + ":00");
            $('.title').text('WORK');
            // reset
            secs = 0;
            mins = timeCounter;
        }});
    //THIS FUNCTION DECREASES THE WORK TIMER WHEN THE USER HITS THE MINUS BUTTON
    $('#minusCount').click(function(){
        if(pause === false){
        if(timeCounter > 1){
        timeCounter --; 
        $('#mediumTimer').html(timeCounter);
        $('.bigTimer').html(timeCounter + ":00");
        $('.title').text('WORK');}
        // reset
        secs = 0;
        mins = timeCounter;
        }});
    //THIS FUNCTION INCREASES THE WORK TIMER WHEN THE USER HITS THE PLUS BUTTON
    $('#plusCount').click(function(){
        if(pause === false){
            timeCounter++; 
            $('#mediumTimer').html(timeCounter);
            $('.bigTimer').html(timeCounter+ ":00");
            $('.title').text('WORK');
            // reset
            secs = 0;
            mins = timeCounter;
        }});
    //THIS FUNCTION STARTS THE TIMER WHEN THE USER HITS PLAY
    $('#Play').click(function(){
        if (pause === false){
            counter = setInterval(countdown, 1000);
            pause = true;
        }});
    //THIS FUNCTION PUASES THE TIMER WHEN THE USER HITS PAUSE
    $('#Pause').click(function(){
        if(pause === true){
            clearInterval(counter);
            pause = false;
        }})});