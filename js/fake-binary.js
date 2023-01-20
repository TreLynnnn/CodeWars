// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function will take in a string of digits. will never be empty
// return result of replacing any number below 5 with 0 and any number above 0 with 1
// 12545135 -> 00101001
// 252 -> 010
// 58523864866121 ->11100110111000

function fakeBin(x) {
    // check each number in string to see if it's less than 4 or  5 or greater
    
        let output = "";
          for (let i=0; i<x.length; i+=1) {
            if (x[i] < 5) {
              output += 0;
              } else { output += 1; }
            }
            return output;
    // return 
}

console.log(fakeBin('2495'))