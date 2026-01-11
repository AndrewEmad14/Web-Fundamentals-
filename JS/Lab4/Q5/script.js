var marbleContainer = document.getElementById("marbleContainer");
var speedInput = document.getElementById("speed"); 
var isRunning = true;
var currentMarble = 0;

var speed = parseInt(speedInput.value);
var numberOfMarbles = marbleContainer.children.length;
var prevMarble = numberOfMarbles-1;
var onStop = null;
var intervalId = null;

function startLoop(){
    var marbleLoop = setInterval(function(){
        if(currentMarble > numberOfMarbles-1){
            currentMarble = 0;
        }
        if(prevMarble > numberOfMarbles-1 ){
            prevMarble = 0;
        }
        marbleContainer.children[currentMarble].src="./assets/marbleOn.jpg";
        marbleContainer.children[prevMarble].src="./assets/marbleOff.jpg";
        currentMarble+=1;
        prevMarble+=1;

    },speed)
    intervalId = marbleLoop
}
function endLoop(){
        clearInterval(intervalId);
    
}
startLoop();

marbleContainer.addEventListener("mouseenter",function(){
    endLoop();
})
marbleContainer.addEventListener("mouseleave",function(){
    startLoop();
})
speedInput.addEventListener("input",function(){
    speed = parseInt(this.value);
    endLoop();
    startLoop();
})