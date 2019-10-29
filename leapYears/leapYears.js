const leapYears = function(isLeapYear) {
    if(isLeapYear % 4 == 0)
    {
        if(isLeapYear % 400 == 0) 
        {
           return true;
        }
        else if(isLeapYear % 400 !== 0 && isLeapYear % 100 !== 0)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    else 
    {
        return false;
    }
   
}

module.exports = leapYears
