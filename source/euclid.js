'use strict';

const NOD = function(x, y) {
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
	
	let first = numbers[0];
	
	for (let i = 1; i < numbers.length; i++ ) {
		let second = numbers[i];
		first = NOD(first, second);
	}
	
	return first;
}
