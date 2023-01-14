// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//function should take in an arr with integers. will never ne empty. Could be positive or negative integers
// The result should be the product of all numbers in the arr
// Input: [2,4,6,8] output: 
// Input: [2,2,2] output: 8
// Input: [1,2,3,5] output: 30

function grow(n){
    return n.reduce((acc, c) => acc * c)
}
console.log(grow([1,2,3,4]), 24)