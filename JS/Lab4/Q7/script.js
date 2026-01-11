var userInput = document.getElementById("userInput");
var feedbackMsg = document.getElementById("feedbackMsg");

userInput.addEventListener("change",function(){
    if(!userInput.value){
        feedbackMsg.style.color = "red";
        feedbackMsg.textContent = "You cant enter an empty number";
    }else if(isNaN(userInput.value)){
        feedbackMsg.style.color = "red";
        feedbackMsg.textContent = "No letter allowed";
    }else{
        feedbackMsg.style.color = "green";
        feedbackMsg.textContent = "You have enterd a valid number";

    }
})