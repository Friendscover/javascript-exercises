const repeatString = function(repeatString, numberOfRepeats) {
    
    let newString = "";
    for (i = 0; i < numberOfRepeats; i++)
    {
       newString = newString.concat(repeatString);
    }
    return newString;
}

module.exports = repeatString
