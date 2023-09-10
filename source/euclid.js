'use strict';

const gcd = (x, y) => y ? gcd(y, x % y) : x

const euclid = (...numbers) => {
	if (numbers.some((number) => !Number.isInteger(number))) {
		return null;
	}		
	
	return numbers.reduce((previousValue, current) => gcd(previousValue, Math.abs(current)), 0);
}
