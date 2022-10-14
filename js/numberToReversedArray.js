// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// p: function will be given a non-negative number
// r: Should return the numbers in an array and in reversed order
// e: 911 = [1,1,9]; 825 = [5,2,8]; 1000 = [0001];
// p: 

// create function that accepts non-negative number
function digitize(n){
    return n.toString().split('').reverse().map(Number)
}
digitize(321);