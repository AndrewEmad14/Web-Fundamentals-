var nextBtn = document.getElementById("Next");
var slideBtn = document.getElementById("SlideShow");
var stopBtn = document.getElementById("Stop");
var prevBtn = document.getElementById("Prev");
var allBtn = document.querySelectorAll("button");
var imageContainer = document.getElementById("imageContainer");
var numberOfImages = 6;
var intervalId = null;
var onStop = null;
var currentImage = 1 ;
function toggleBtnActivation(button){
    // I add a class named "active" if it isnt there it will add it if it is there it will remove it
    button.classList.toggle("active");
}
//prevents the button form being clicked while doing it work

function disableAllBtn(){
    for(let i = 0; i < allBtn.length; i++){
        if(allBtn[i].id !== "Stop"){
            allBtn[i].disabled = true;

        }
    }
}
//enabling buttons when done
function enableAllBtn(){
    for(let i = 0; i < allBtn.length; i++){
        if(allBtn[i].id !== "Stop"){
            allBtn[i].disabled = false;
        }
    }
}

// here we have two problems
// 1.if use setTimeout(funciton() , 1000) what i am saying is in each iteration set it to fire after 1000ms
//now what will happen after the function ends? all of the images will wait 1000ms and then fire at once! 
// to solve this i used the index * delaytime 
//2. the way var scoping works
//var is function scoped so there is only 1 "i" shared across the function
// since it is a callback it will fire until the function ends, when it does it will 
// check the value of i which is now the number of images +1 which isnt the behavior we want
// to sove this we use instantly invoked functions , each time the function gets an i as a parameter and 
//inside a new index is created each time , meaning each run will have its own index not a shared one like var
function normalIteration(callback){

    for(var i=currentImage; i<=numberOfImages;i++){
        (function (index){
                setTimeout(function(){
                imageContainer.children[0].src = `./assets/${index}.jpg`; 
                if(index === numberOfImages){
                    callback();
                } 
            },index*2000)
        })(i);
        
    
    }
    currentImage = i -1; // here i am saying that the current image is equal to the end where the next should stop

}
// in the reverse function i have to do currentImage - index so that the image delay increase over time
function reverseIteration(callback){

    for(var i=currentImage; i>=1;i--){
        (function (index){
                setTimeout(function(){
                imageContainer.children[0].src = `./assets/${index}.jpg`;  
                if(index === 1 ){
                    callback();
                }
            },(currentImage-index)*2000)
        })(i);
    }
    currentImage=i+1;// here i am saying that the current image is equal to the start where the prev should stop
}
// in circular function i use setInterval , i needed it to be global so another button can trigger its clearing
// i also did a global var to take the call back function and activate it since another button is triggering it
function circularIteration(callback){
    var i = currentImage;
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function() {
        onStop = callback;
        // Update image
        imageContainer.children[0].src = `./assets/${i}.jpg`;
        
        // Increment and wrap around
        i++;
        if (i > numberOfImages) {
            i = 1;
        }
        
        currentImage = i;
    }, 2000);
}
// here i am doing two things first i am clearing the interval and then i am checking if onstop isnt equal to null
// since the user can press it even if the slideshow isnt working so it's a safety measure
function stopIteration(){
    clearInterval(intervalId);
    if(onStop) {
            onStop();
            onStop = null;
    }
}
//event listner for next button i first toggle the button activation to indicate that it is active
// next i disable all the buttons to stop the user from accedintely pressing any other buttons
// once the function finishes i toggle the active class tag and enable all the btns
nextBtn.addEventListener("click",function (){
    var button = this;
    toggleBtnActivation(button);
    disableAllBtn();
    normalIteration(function(){
        toggleBtnActivation(button);
        enableAllBtn();
    });
    

});
//event listner for prev button i first toggle the button activation to indicate that it is active
// next i disable all the buttons to stop the user from accedintely pressing any other buttons
// once the function finishes i toggle the active class tag and enable all the btns
prevBtn.addEventListener("click",function (){
    var button = this;
    toggleBtnActivation(button);
    disableAllBtn();
    reverseIteration(function(){
        toggleBtnActivation(button);
        enableAllBtn();
    });;

});

slideBtn.addEventListener("click",function(){
    var button = this;
    toggleBtnActivation(button);
    disableAllBtn()
    circularIteration(function(){
        toggleBtnActivation(button);
        enableAllBtn()

    });
})
//stops slideBtn
stopBtn.addEventListener("click",function(){
    stopIteration();
});
    


