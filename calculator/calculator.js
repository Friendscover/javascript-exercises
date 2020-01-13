function add (x, y) {
	return  (x + y);
}

function subtract (x, y) {
	return (x - y);
}

function sum (x) {
	let sum = 0;
	for(i = 0; i < x.length; i++)
	{
		sum += parseInt((x[i]));
	}
	return sum;
}

function multiply (x) {
	let sum = 1;
	for(i = 0; i < x.length; i++)
	{
		sum *= parseInt((x[i]));
	}
	return sum;
}

function power(x, y) {
	let sum = 1;
	for (i = 0; i < y; i++)
	{
		sum *= x;
	}
	return sum;
}

function factorial(x) {
	// let startCounter = x;
	let sum = 1;
	for(i = x; i > 0; i--)
	{
		sum *= (x);
		x--; 
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}