// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.



// only going to take a string. will never empty string. no integers being taken in.
// Royal -> "Royal plays banjo"
// Amy -> "Amy does not play banjo"
// ryan -> "ryan plays banjo"

function areYouPlayingBanjo(name){
    // Check the first letter of name to see if it is a "R" or "r"
    // If first letter "R" or "r" return the name + plays banjo
    // Otherwise return name + does not play banjo
    let checkName = name.charAt().toLowerCase()
    if(checkName == "r"){
        return `${name} play banjo`
    }else{
        return `${name} does not play banjo`
    }
    
}
console.log(areYouPlayingBanjo('Rhonda'), 'Rhonda plays banjo')
console.log(areYouPlayingBanjo('nick'), 'nick does not play banjo')
console.log(areYouPlayingBanjo('ryan'), 'ryan does play banjo')