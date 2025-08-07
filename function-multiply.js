
// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 

function multiply(num1, num2, num3, num4){
    let result = num1*num2*num3*num4;
    console.log(result);
    return result;
}
multiply(4, 5, 3, 2);



function multiplyNum(num1, num2, num3, num4){
    return num1*num2*num3*num4;
}

console.log('Multiply of four give number is: ',multiplyNum(10,12,15,16));
console.log('-----------');