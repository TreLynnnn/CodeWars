// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    // grab the first letter in each name and return them with dot in between
   return name.split(' ').map( name => name[0]).join(".").toUppercase()
}
