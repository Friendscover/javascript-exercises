const removeFromArray = function(givenArray) 
{
    //looping through every argument given
    for (let i = 1; i <= (arguments.length); i++)
    {
        //Looking up the index of the removed item
        let index = givenArray.indexOf(arguments[i]);
        if(givenArray.includes(arguments[i]))
        {
            givenArray.splice(index, 1);
        }
    } 
    return givenArray;
}

module.exports = removeFromArray
