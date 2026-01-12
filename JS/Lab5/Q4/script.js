// swap
let first = 1;
let second =2;
[first,second] = [second,first]
console.log(first,second);

function getExeterme(...arr){
    let min = Math.min(...arr); 
    let max = Math.max(...arr);

    // arr.forEach(element => {
    //     if(element<min){
    //         min = element;
    //     }
    //     if(element>max){
    //         max = element;
    //     }
        
    // });
    
    return [min,max];
}

let minMaxArr = [...getExeterme(1,2,3,4,5,6,7,8)];
console.log(minMaxArr);