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

const euclid = function(...numbers) {
	if(numbers.length < 2) {
		return numbers[0];
	}
	
	/*for (let i = 1; i < numbers.length; i++ ) {
		let second = numbers[i];
		if (second == 0) {
			return 'Uncorrect';
		}
		
		first = gcd(Math.abs(first), Math.abs(second));
	}*/	
	let result = numbers.reduce((first, second) => {
		return gcd(Math.abs(first), Math.abs(second));
	}, 0);
		
	return result;
}
