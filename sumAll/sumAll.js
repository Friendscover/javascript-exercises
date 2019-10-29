const sumAll = function() {
    let sum = 0;
    //checking the parameters for the right values, could be refactored
    if(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]) 
        && (arguments[0] >= 0  && arguments[1] >= 0))
    {
        if (arguments[0] > arguments[1])
        {
            endNumber = arguments[0];
        }
        else
        {
            endNumber = arguments[1];
        }
    
        for(let i = 1; i <= endNumber; i++)
        {
            sum += i;
        }
        return sum;
    }
    else
    {
        return 'ERROR';
    }
    

   
}

module.exports = sumAll
