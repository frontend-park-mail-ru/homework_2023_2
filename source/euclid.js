'use strict';

const gcd = (x, y) => {
	while (x > 0 & y > 0) {
		if (x > y) {
			x = x % y;
		}
		else {
			y = y % x;
		}
	}
	
	return x + y;
}

const euclid = (...numbers) => {
	if (numbers.some((number) => !Number.isFinite(number) ? true : false)) {
		return "Infinity number";
	}		
	
	const result = numbers.reduce((previousValue, current, index) => {	
		return gcd(previousValue, Math.abs(current));
	}, 0);
		
	return result;
}
