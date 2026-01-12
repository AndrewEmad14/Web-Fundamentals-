var startBtn = document.getElementById("start");
var timerSpan = document.getElementById("timer");
var isAltPressed = false;
var intervalId = null;
function getCurrentTime(){
    var time = new Date().toLocaleTimeString("ar-EG", {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit' 
    });
    return time;
}
function startTimer(){
    if (intervalId) {
        clearInterval(intervalId);
    }
    timerSpan.textContent = getCurrentTime();
    intervalId = setInterval(function(){
    timerSpan.textContent = getCurrentTime();
    },1000)
}

function stopTimer(){
    clearInterval(intervalId);
   
}

startBtn.addEventListener("click",function(){
    alert("Clock Started");
    startTimer();
    this.disabled = true;
    
});
addEventListener("keydown",function(e){
    if(e.altKey){
        isAltPressed = true;
        console.log("alt is pressed")
    } 
    console.log(e.key);
    if(e.code === 'KeyW' && isAltPressed){
       
        stopTimer();
        startBtn.disabled = false;
        alert("Clock Stopped");
    }
})
addEventListener("keyup",function(e){
    if(e.key === "Alt"){
        isAltPressed = false;
    }
})


