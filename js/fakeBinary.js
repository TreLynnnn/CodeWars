// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//takes in a string of numbers. the input will never be empty. numbers are non-negative.
// return the string after replacing numbers 5 and up with 1 and below 5 with 0
// Input: "2579" Output: "0111"
// Input: "9237" Output: "1001"
// Input: "2973518" Output: "0110101"

function fakeBinary(str){
    // map the string to determine whether the number is less than or greater than 5 and replace accordingly
    return str.split('').map(x => x < 5 ? 0 : 1).join('')
   
    
}
console.log(fakeBinary("2973518"))