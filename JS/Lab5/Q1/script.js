var newWindow = null;
function openWin() {
  newWindow = open("index2.html","");
}
function closeWin() {
  // window.close();
  newWindow.close();
}

openWin();
setTimeout(function(){
    closeWin();
},5000)