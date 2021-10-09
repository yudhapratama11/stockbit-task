function findFirstStringInBracketClean(str){
    // Returning Empty string if string is empty
    if(str.length == 0) return '';
    
    // Finding index of "("
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound == -1) return '';

    // Take words after "("
    let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

    // Finding index of ")" using the words after the first bracket
    let indexSecondBracketFound = wordsAfterFirstBracket.indexOf(")");
    
    if(indexSecondBracketFound == -1) return '';

    // Take the words from the index that found
    return (str.substring(indexFirstBracketFound+1, indexSecondBracketFound+indexFirstBracketFound))
}

console.log(findFirstStringInBracketClean("(world hello)"))
console.log(findFirstStringInBracketClean(")(lorem ipsum)(world hello)"))
console.log(findFirstStringInBracketClean(")(((((hello)"))