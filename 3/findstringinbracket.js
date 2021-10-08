function findFirstStringInBracketClean(str){
    if(str.length == 0) return '';
    
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound == -1) return '';

    let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
    let indexSecondBracketFound = wordsAfterFirstBracket.indexOf(")");
    
    if(indexSecondBracketFound == -1) return '';

    return (str.substring(indexFirstBracketFound+1, indexSecondBracketFound+indexFirstBracketFound))
}

console.log(findFirstStringInBracketClean("(world hello)"))
console.log(findFirstStringInBracketClean(")(lorem ipsum)(world hello)"))
console.log(findFirstStringInBracketClean(")(((((hello)"))
