// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers){
    const size = numbers.length;
    // console.log(size);
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum += numbers[i];
    }
    return sum / size;
}

const output = make_avg([11,25,89,14,65]);

console.log('Average of the given array is: ', output);


function make_avg(myNum) {
    const size = myNum.length;
    let sum = 0;
    let i = 0;
    while(i < size){
        sum += myNum[i];
        i++;
    }
    return sum / size;
}

const average = make_avg([50,55,79,104,615]);
console.log('Average of the given array is: ', average);


function new_avg(myNumbers){
    const lengthOfArray = myNumbers.length;
    console.log('Length of array is:',lengthOfArray);

    let total = 0;
    for(num of myNumbers){
        total += num;
    }
    const averageOfMyNumbers = total / lengthOfArray;
    return averageOfMyNumbers;

}


const newOutPut = new_avg([15,250,157,59,57,104]);
console.log('Average of the given array is: ',newOutPut);