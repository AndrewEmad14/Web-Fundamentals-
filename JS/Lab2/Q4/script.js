var array=[]
array.fill(1);
for(var i=0;i<3;i++){
    var isRunning = true;
    var number = "";
    while (isRunning) {
        number = prompt(`What is the value of your Number ${i+1}`);
        if (!number) {
            alert("YOU CANT ENTER AN EMPTY NUMBER");
        } else if (isNaN(number)) {
            alert("NUMBER MUST CONTAIN ONLY NUMBERS");
        }else if(i>0 && parseInt(number) === 0){
            alert("YOU CANT DIVIDE ZEROS");
        }else {
            isRunning = false;
        }
    }
    array.push(parseInt(number));
}

var summation = array.at(0);
var multiplication = array.at(0);
var division = array.at(0);
for(var i=1;i<3;i++){
    summation+=array.at(i);
    multiplication*=array.at(i);
    division/=array.at(i);
}

document.write(`
       <p>  
            Sum: ${summation}
        <br>
            Multiplication: ${multiplication}
        <br>
            Divide: ${division}
        <br>
       </p>
    `);