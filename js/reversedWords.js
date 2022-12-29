// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//Takes in a string of words. Will never e anything but string 
// Should return the sentence backwards
// Input: "My dog ran" Output: "ran dog My"
// Input: "who let the dogs out" Output: "out dogs the let who"
// Input: "I will win" Output: "win will I"

function reverseWords(sentence){
    //take sentence and split, reverse, join back together then return result
    return sentence.split(' ').reverse().join(' ')
}

console.log(reverseWords("I will win"), "win will I")