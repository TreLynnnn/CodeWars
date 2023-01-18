// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// function should take in a number (n)
// Return the number of positive odd numbers below n
// 5 -> 2
// 13 -> 5
// 21 -> 10

function countOdd(n) {
    // check if number is even or odd
    // if yes, count the number of odd numbers below n
    //return the number of positive odd numbers BELOW n
    let x = [];
    
        for(let i = 0; i < n; i++) {
            if(i < n && i % 2 !== 0) {
                x.push(i)
            }
        }
        return x.length
    }


console.log(countOdd(7))