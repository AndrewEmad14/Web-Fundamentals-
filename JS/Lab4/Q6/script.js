var keyboardInput = document.getElementById("keyboardInput");
var keyboardOutput = document.getElementById("keyboardOutput");
keyboardInput.addEventListener("keydown",function(e){
   
    switch(e.key) {
        case 'Shift':
            keyboardOutput.textContent = 'Shift key pressed';
            break;
        case 'Control':
            keyboardOutput.textContent = 'Ctrl key pressed';
            break;
        case 'Alt':
            keyboardOutput.textContent = 'Alt key pressed';
            break;
        default:
            keyboardOutput.textContent = e.key.charCodeAt(0);
    }
  
})
