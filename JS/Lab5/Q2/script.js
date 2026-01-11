var userNameInput = document.getElementById("userName");
var userTitleInput = document.getElementById("title");
var userAddressInput = document.getElementById("address");
var userEmailInput = document.getElementById("email");
var userMobileInput = document.getElementById("mobile");
var submitBtn = document.getElementById("submitBtn");

var feedbackMsgName = document.getElementById("feedbackMsgName");
var feedbackMsgTitle = document.getElementById("feedbackMsgTitle");
var feedbackMsgAddress = document.getElementById("feedbackMsgAddress")
var feedbackMsgEmail = document.getElementById("feedbackMsgEmail");
var feedbackMsgMobile = document.getElementById("feedbackMsgMobile")
;
var userEmailRegex = /[\w.-]+@([\w-]+\.)+[\w-]{2,4}/;
var userNameRegex = /^[a-zA-Z ]+$/;
var userMobileRegex = /^\+?[1-9]\d{11,14}$/
var anythingRegex = /.+/s

var titleFlag = false;
var nameFlag = false;
var addressFlag = false;
var emailFlag = false;
var mobileFlag = false;

var newWindow = null;

userNameInput.addEventListener("change",function(){
    if(!userNameInput.value){
        feedbackMsgName.style.color = "red";
        feedbackMsgName.textContent = "You cant enter an empty name";
    }else if(!userNameInput.value.match(userNameRegex)){
        feedbackMsgName.style.color = "red";
        feedbackMsgName.textContent = "Invalid name";
    }else{
        feedbackMsgName.style.color = "green";
        feedbackMsgName.textContent = "✓";
        nameFlag = true;

    }
});
userTitleInput.addEventListener("change",function(){
    if(!userTitleInput.value){
        feedbackMsgTitle.style.color = "red";
        feedbackMsgTitle.textContent = "You cant enter an empty Title";
    }else if(!userTitleInput.value.match(anythingRegex)){
        feedbackMsgTitle.style.color = "red";
        feedbackMsgTitle.textContent = "Invalid Title";
    }else{
        feedbackMsgTitle.style.color = "green";
        feedbackMsgTitle.textContent = "✓";
        titleFlag = true;

    }
});
userAddressInput.addEventListener("change",function(){
    if(!userAddressInput.value){
        feedbackMsgAddress.style.color = "red";
        feedbackMsgAddress.textContent = "You cant enter an empty Address";
    }else if(!userAddressInput.value.match(anythingRegex)){
        feedbackMsgAddress.style.color = "red";
        feedbackMsgAddress.textContent = "Invalid Address";
    }else{
        feedbackMsgAddress.style.color = "green";
        feedbackMsgAddress.textContent = "✓";
        addressFlag = true;

    }
});
userEmailInput.addEventListener("change",function(){
    if(!userEmailInput.value){
        feedbackMsgEmail.style.color = "red";
        feedbackMsgEmail.textContent = "You cant enter an empty email";
    }else if(!userEmailInput.value.match(userEmailRegex)){
        feedbackMsgEmail.style.color = "red";
        feedbackMsgEmail.textContent = "Invalid Email";
    }else{
        feedbackMsgEmail.style.color = "green";
        feedbackMsgEmail.textContent = "✓";
        emailFlag = true;

    }
});
userMobileInput.addEventListener("change",function(){
    if(!userMobileInput.value){
        feedbackMsgMobile.style.color = "red";
        feedbackMsgMobile.textContent = "You cant enter an empty Mobile";
    }else if(!userMobileInput.value.match(userMobileRegex)){
        feedbackMsgMobile.style.color = "red";
        feedbackMsgMobile.textContent = "Invalid Mobile";
    }else{
        feedbackMsgMobile.style.color = "green";
        feedbackMsgMobile.textContent = "✓";
        mobileFlag = true;

    }
});

submitBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(emailFlag && nameFlag && titleFlag && addressFlag && mobileFlag){
            manpuilateWelcomePage();
            emailFlag = false;
            nameFlag = false;
            ageFlag = false;
            userNameInput.value = "";
            ageInput.value = "";
            emailInput.value = "";

    }
    document.querySelector('form').reset();
})

setTimeout(function(){
    alert("timeout");
},30000)

function manpuilateWelcomePage(){
    var params = new URLSearchParams({
        name: userNameInput.value,
        title: userTitleInput.value,
        address: userAddressInput.value,
        email: userEmailInput.value,
        mobile: userMobileInput.value
    });
    location.href = "Welcome.html"+"?" + params.toString();;

}