var inp = document.querySelector("#Answer");
var regex = /^-?\d+\.?\d*(?:[\+\-%*\/]-?\d+\.?\d*)*$/;
alertMsg = document.createElement("span");
alertMsg.style.color = "red";
alertMsg.style.display = "none";
document.body.append(alertMsg);
function EnterNumber(num){
    inp.value += num;
}
function EnterOperator(operand){
    inp.value += operand;
}
function EnterEqual(){
    result = getResult(inp.value);
    if(result === false){
       alertMsg.style.display = "block";
       alertMsg.textContent = "Invalid input please try again";
        
    }else if(!isFinite(result)){
        alertMsg.style.display = "block";
        alertMsg.textContent = "Math error , dividing on a zero is not allowed"
    }else{
        alertMsg.style.display = "none";
        inp.value = result;
    }
}
function EnterClear(){
    inp.value = inp.value.slice(0,-1);
    console.log(inp.value);
    
}
function getResult(expression){
    if(!expression.match(regex)){
        return false;
    }
    return eval(expression)
}