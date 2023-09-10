'use strict';

const gcd = (x, y) => y == 0 ? x : gcd(y, 	x % y)

const euclid = (...numbers) => {
	if (numbers.some((number) => !Number.isFinite(number) ? true : false)) {
		return "Infinity number";
	}		
	
	const result = numbers.reduce((previousValue, current, index) => {	
		return gcd(previousValue, Math.abs(current));
	}, 0);
		
	return result;
}
