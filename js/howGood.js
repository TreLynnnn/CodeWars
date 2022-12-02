// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//function will take in an arr of nums. The arr will no be empty. Will never take in anything other than an arr. not empty.
//Should return True if your average is higher than class' average and false if less than class's aaverage
// input: [2,3], 5 output: true
// input: [100, 40, 34, 57, 29, 72, 57, 88], 75 output: true
// input: [12, 23, 34, 45, 56, 67, 78, 89, 90], 9 output: false

function betterThanAverage(cp, mp){
    // go through the arr and add all scores, then divide by arr length to get average
   let classSum = cp.reduce((acc, c) => acc + c, 0)
    let classAvg = classSum / cp.length
    // if average is greater than my points(mp) return true, if not retuen false
    if(classAvg < mp){
        return true
    }else{
        return false
    }
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)