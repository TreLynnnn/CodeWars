// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// function should take in a string of letters. no special characters. could be uppercase or lowercase.
// Should return the string without the vowels
// "hello" -> "hll"
// "bye" -> "by"
// "home" -> "hm"

function shortcut (str){
    // loop throuh sting to see if letter is vowel. if yes, remove from string
    return str.replace(/[aeiou]/gi, ''); 
}
console.log(shortcut("hello"), "hll")