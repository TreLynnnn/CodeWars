// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Parameters: a list of non-negative integers and strings

// Return: list of integers with strings filtered out.

// Examples: 
// filter_list([1,2,'a','b']) == [1,2] 
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Psudeocode
// Remove the strings from list and return the array with non-negative integers

function filterList(arr){
    // check list for strings, remove them from list, and return the list
    return arr.filter(e => typeof e == "number")
    }
console.log(filterList([1,2,'a','b']))