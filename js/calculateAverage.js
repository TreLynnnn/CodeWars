// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//takes in array. will never be anything other than array.
// return the average of the array
// input: [1,1,1] output: 1
// input: [1,2,3,4] output: 2.5
// input: [1,2,3] output: 2

function findAverage(arr){
    // sum all numbers in arr and divide by arr length
    if(arr.length === 0){
        return 0
    }else{
        let sum = arr.reduce((acc,c) => acc + c, 0) 
        return sum / arr.length
    }
   
}
console.log(findAverage([1,1,1]))