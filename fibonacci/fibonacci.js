const fibonacci = function(numberOfLoops) {
    if(numberOfLoops > 0)
    {
        let fibonacciArray = [1, 1];
        for (i= 1; i < numberOfLoops -1; i++)
        { 
            let firstFiboNumber = fibonacciArray[i];
            let secondFiboNumber = fibonacciArray[i - 1];
            let fiboToAdd = parseInt(firstFiboNumber + secondFiboNumber);
            fibonacciArray.push(fiboToAdd);
            //console.log(fibonacciArray);
        }
        return fibonacciArray.pop();
    }
    else 
    {
        return "OOPS";
    }
}

module.exports = fibonacci
