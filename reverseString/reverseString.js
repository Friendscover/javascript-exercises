const reverseString = function(toReverseString) {
    let newString ="";
    for (let i = toReverseString.length ; i >= 0; i--)
    {
        newString += toReverseString.charAt(i, i);
    }
    return newString;
}

module.exports = reverseString
