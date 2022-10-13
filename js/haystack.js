// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"




function findNeedle(haystack) {
    let position = haystack.indexOf("needle")
    
    return `found the needle at position ${position}`
  }