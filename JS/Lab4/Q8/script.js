function addRowToTable(name,age,email){
    var tempTable = document.getElementById("tableContainer").children[0];
    var newRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    var ageCell = document.createElement("td");
    var emailCell = document.createElement("td");
    nameCell.textContent = name;
    ageCell.textContent = age;
    emailCell.textContent = email;
    newRow.append(nameCell);
    newRow.append(ageCell);
    newRow.append(emailCell);
    tempTable.append(newRow);
}

var userNameInput = document.getElementById("userName");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn")
var feedbackMsgName = document.getElementById("feedbackMsgName");
var feedbackMsgAge = document.getElementById("feedbackMsgAge");
var feedbackMsgEmail = document.getElementById("feedbackMsgEmail");
var emailRegex = /[\w.-]+@([\w-]+\.)+[\w-]{2,4}/;
var userNameRegex = /^[a-zA-Z ]+$/;
var ageFlag = false;
var nameFlag = false;
var emailFlag = false;



ageInput.addEventListener("change",function(){
    if(!ageInput.value){
        feedbackMsgAge.style.color = "red";
        feedbackMsgAge.textContent = "You cant enter an empty age";
    }else if(isNaN(ageInput.value)){
        feedbackMsgAge.style.color = "red";
        feedbackMsgAge.textContent = "No letter allowed";
    }else if(parseInt(ageInput.value)<1 || parseInt(ageInput.value)>99){
        feedbackMsgAge.style.color = "red";
        feedbackMsgAge.textContent = "Age is only between 1 and 99";
    }else{
        feedbackMsgAge.style.color = "green";
        feedbackMsgAge.textContent = "✓";
        ageFlag=true;
    }
});

userNameInput.addEventListener("change",function(){
    if(!userNameInput.value){
        feedbackMsgName.style.color = "red";
        feedbackMsgName.textContent = "You cant enter an empty name";
    }else if(!userNameInput.value.match(userNameRegex)){
        feedbackMsgName.style.color = "red";
        feedbackMsgName.textContent = "Invalid name try again";
    }else{
        feedbackMsgName.style.color = "green";
        feedbackMsgName.textContent = "✓";
        nameFlag=true;

    }
});
emailInput.addEventListener("change",function(){
    if(!emailInput.value){
        feedbackMsgEmail.style.color = "red";
        feedbackMsgEmail.textContent = "You cant enter an empty email";
    }else if(!emailInput.value.match(emailRegex)){
        feedbackMsgEmail.style.color = "red";
        feedbackMsgEmail.textContent = "Invalid Email";
    }else{
        feedbackMsgEmail.style.color = "green";
        feedbackMsgEmail.textContent = "✓";
        emailFlag = true;

    }
});
submitBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(emailFlag && nameFlag && ageFlag){
            addRowToTable(userNameInput.value,ageInput.value,emailInput.value);
            emailFlag = false;
            nameFlag = false;
            ageFlag = false;
            userNameInput.value = "";
            ageInput.value = "";
            emailInput.value = "";
    }
})

resetBtn.addEventListener("click",function(){
   
            emailFlag = false;
            nameFlag = false;
            ageFlag = false;
            userNameInput.value = "";
            ageInput.value = "";
            emailInput.value = "";
    
})