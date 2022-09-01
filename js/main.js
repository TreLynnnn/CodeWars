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

// var orderedCount = function (text) {
//    // Implement me!
//   const splitStr = text.split('');
//   const str = [...new Set(splitStr)];
//
//   let resultArr = [];
//
//   for (let i = 0; i <= str.length-1; i += 1) {
//     resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
//   }
//
//   return resultArr;
// }


//Count the divisors of a number
// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000.

// let output = 0;
//     for (let i=1; i<=n; i++) {
//       if (n % i == 0) {
//         output += 1;
// }
// }
//   return output;

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount (n) {
//    if(n >= 10){
//      return "Great, now move on to tricks"
//    }else{
//      return "Keep at it until you get it"
//    }
// }
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)

// function sumStr(a,b) {
//   return String(Number(a)+Number(b));
// }
 // Given an array of integers your solution should find the smallest integer.
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

// L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

// function setAlarm(employed, vacation){
//  if(employed == true && vacation == false){
//    return true
//  }else{
//    return false
//  }
// }
// Disemvowel Trolls
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// function disemvowel(str) {
//   let noVowels = str.replace(/[aeiou]/gi, '')
//   return noVowels;
// }

// Create a phone number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//  //You got this!
//  let splitStr = str.split('')
//  let removeFirst = splitStr.pop()
//  let removeLast = splitStr.shift()
//  const joinStr = splitStr.join('')
//  return joinStr
// };

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number
// function highAndLow(numbers){ numbers = numbers.split(' '); return `${Math.max(...numbers)} ${Math.min(...numbers)}`; }

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// function likes (names) {
//   return {
//     0 : 'no one likes this',
//     1 : `${names[0]} likes this`,
//     2 : `${names[0]} and ${names[1]} like this`,
//     3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//   }[Math.min(4, names.length)]
// }


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).




// function DNAStrand(dna){
//   let sequence = {
//     "A": "T",
//     "T": "A",
//     "G": "C",
//     "C": "G"
// }
//   return dna.replace(/A|T|G|C/g, function(matched) {
//     return sequence[matched];
// });
// }

// Remove String spaces
// Simple, remove the spaces from the string, then return the resultant string.
// function noSpace(x){
//   let removeSpace = x.replace(/\s+/g, '');
//   return removeSpace
// }

// Descending order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n){
//     return parseInt((n+'').split('').sort().reverse().join(''))
// }

//Odd or Even
// Given a list of integers, determine whether the sum of its elements is odd or even.
//
// Give your answer as a string matching "odd" or "even".
//
// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
//     return array.reduce( function (sum, item) { return sum + item }, 0) % 2 == 0 ? 'even': 'odd';
//   }

// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){
//
// return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
//
// }

// Color Ghost
// Create a class Ghost
// 
// Ghost objects are instantiated without any arguments.
//
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};

// String to Number
// We need a function that can transform a string into a number. What ways of achieving this do you know?
const stringToNumber = function(str){
  // put your code here
  let toString = parseInt(str)
  return toString;
}