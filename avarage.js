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

make_avg([11,25,89,14,65]);
const output = make_avg([11,25,89,14,65]);

console.log('Average of the given array is: ', output);