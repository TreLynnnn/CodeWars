// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// You can assume that all values are integers. Do not mutate the input array/list.

// takes in integers that are positive and negative
// should return the opposite of each integer and not mutate the array
// [1,2,3,,4] --> [-1,-2,-3,-4]
// [2,4,6,8] --> [-2,-4,-6,-8]
// [-3,-4,-5,-6] --> [3,4,5,6]

function invertValues(arr){
    // loop through arr to retuen postive of each number and return arr. 
        for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i] * (-1) 
      }
      return arr
    }


console.log(invertValues([1,2,3,4]), [-1,-2,-3,-4])




