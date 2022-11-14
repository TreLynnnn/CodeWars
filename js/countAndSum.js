// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Takes in an array of numbers (positive and negative), can be an empty array as well

function countPositivesSumNegatives(input){
    if(input && input.length){
        let addPositive = 0;
        let sumNegative = 0;
        input.forEach(num => num > 0 ? addPositive++ : sumNegative += num)
        return[addPositive, sumNegative]
    }else{
        return []
    }
    
}
 console.log(countPositivesSumNegatives([1,2,3,4,-1,-2,-3,-4]), [4, -10])
 console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50])