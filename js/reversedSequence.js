// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//function should take in a number. Nothing else will be taken in.
// function should return an array that contains n to 1
// input: 3 output: [3,2,1]
// input: 10 output: [10,9,8,7,6,5,4,3,2,1]
// input: 7 output: [7,6,5,4,3,2,1]

const reverseSeq = (n) => {
    //check whether the number is greater than 0. If it is return an arr containing n to 1.
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr.reverse()
}