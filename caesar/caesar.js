const caesar = function(textToDecode, shiftValue) {
    let alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h" , "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let betaArray=  ["A", "B", "C", "D", "E", "F", "G", "H" , "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z"];
    
    let stringToReturn = "";

    //wrap around and special cases 
    for(i = 0; i <= textToDecode.length -1; i++)
    {
        //Get the value of each Char in the String an increment by shiftvalue
        let currentChar = textToDecode.charAt(i);
        if(alphaArray.includes(currentChar))
        {
            stringToReturn = stringToReturn + returnCharFromArray(alphaArray,currentChar, shiftValue);
        }
        else if(betaArray.includes(currentChar))
        {
            stringToReturn = stringToReturn + returnCharFromArray(betaArray, currentChar, shiftValue);
        }
        else 
        {
            stringToReturn = stringToReturn + currentChar;
        }
    }
    return stringToReturn;
}

function returnCharFromArray(arrayContainsChar, currentChar, shiftValue)
{
    let charValue = arrayContainsChar.indexOf(currentChar);
    charValue = charValue + shiftValue;
    if(charValue >= 26)
    {
        charValue = charValue % 26;
    }
    else if(charValue <= 0)
    {
        charValue = charValue + 26;
    }    
    let newChar = arrayContainsChar[charValue];
    return newChar;
}

module.exports = caesar
