// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// function smash (words) {
//   let smash = ['hello', 'world', 'this', 'is', 'great']
//
//
//    return "smash"
// };

// Write a function "greet" that returns "hello world!"
  // function greet(){
  //   return 'hello world!'
  // }


// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//   function basicOp(operation, value1, value2)
// {
//   // Code
//   if(operation == '+')  return value1 + value2
//   if(operation == '-')  return value1 - value2
//   if(operation == '*')  return value1 * value2
//   if(operation == '/')  return value1 / value2
// }


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//     function even_or_odd(number) {
//       if( number % 2 == 0){
//         return 'Even';
//       }else(number % 2 !== 0)
//         return 'Odd';
//       }
//
// console.log(even_or_odd(2))

// Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
// // Code here
// return str.toUpperCase();
// }
//  console.log(makeUpperCase('hello'))


// function solution(str){
//   return str.split("").reverse().join("");
// }
// console.log(solution('hello'))

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//   if(n > 0){
//     return s.repeat(n);
//   }else {
//     return "";
//   }
// }
// console.log (repeatStr(3, 'hey'))

// Write function bmi that calculates body mass index (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

function bmi(weight, height) {
let bmi = weight / height**2;

if (bmi<=18.5){
  return "Underweight"
} else if(bmi<=25.0){
  return "Normal"
}else if (bmi<=30.0){
  return "Overweight"
}else (bmi>30)
return "Obese";

}

console.log(bmi(213,64))
