// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//Parameters: We will take in "n" as number of students and "m" as the paperwork.

//Returns: Should return the number of blank pages needed to copy 

//Examples: n = 10 m = 5 returns 50
//          n = 2 m = -2 returns 0
//          n = 3 m = 3 return 0

//Psuedo code:
// Create function that takes in "n" classmates and "m" pages
function paperwork(n, m) {
    if (n< 0 || m < 0) {
       return 0
    }else{
        return n*m
    }
}
paperwork(5, -5)