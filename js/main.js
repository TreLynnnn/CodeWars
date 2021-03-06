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

// function bmi(weight, height) {
// let bmi = weight / height**2;
//
// if (bmi<=18.5){
//   return "Underweight"
// } else if(bmi<=25.0){
//   return "Normal"
// }else if (bmi<=30.0){
//   return "Overweight"
// }else (bmi>30)
// return "Obese";
//
// }
//
// console.log(bmi(213,64))

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
//   }
// getCount('abracadabra')

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false
//
// function boolToWord( bool ){
//  const str = bool === true ? "Yes" : "No"
// return str
//   }
// boolToWord(true);

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// function squareDigits(num){
//
//   let numStr = num + "";
//   let total = "";
//
//   for(let i in numStr){
//     total += (parseInt(numStr[i]**2 + ""))
//   }
//   return parseInt(total);
// }
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them
// String.prototype.toJadenCase = function () {
//   let str = 'How can mirrors be real if our eyes aren\'t real';
//   const arr = str.split(" ");
//
//   for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   const str2 = arr.join(" ");
//   return str2;
// };

// Complete the function to return his total number of goals in all three leagues.
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   let sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
//  return sum;
// }
// goals(12,2,5);

//Print Errors
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// function printerError(s) {
//     const dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
//     const splitString = s.split('');
//     let error = 0;
//     splitString.map((x) => dic.includes(x) === false ? error += 1 : error += 0);
//
//    return `${error}/${s.length}`;
// }

// Reverse
// Write reverseList function that simply reverses lists.
// function reverseList(arr) {
//   return arr.reverse();
// }
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// function getMiddle(s)
// {
//   	let position;
// 		let length;
//
// 			if(s.length % 2 == 1) {
// 				position = s.length / 2;
// 				length = 1;
// 			} else {
// 				position = s.length / 2 - 1;
// 				length = 2;
// 			}
//
// 			return s.substring(position, position + length)
// 		}

//Unordered string
//Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

var orderedCount = function (text) {
   // Implement me!
  const splitStr = text.split('');
  const str = [...new Set(splitStr)];

  let resultArr = [];

  for (let i = 0; i <= str.length-1; i += 1) {
    resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
  }

  return resultArr;
}
