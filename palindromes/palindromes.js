const palindromes = function(stringToCheck) {
    stringToCheck = stringToCheck.toUpperCase();
    let stringA = "";
    stringLength = stringToCheck.length;
    for(i = 0; i >= stringLength; i++);
    {
        if(/^[A-Za-z0-9_]+$/.test(stringToCheck.charAt(i)))
        {
            stringA += stringToCheck.charAt(i);
            console.log(stringA);
        }
    }

}

module.exports = palindromes
