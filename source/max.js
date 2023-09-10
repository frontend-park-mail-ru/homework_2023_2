'use strict';

const max = numbers => Math.max(...numbers);

const inverse = (array, ind) => {
let numbers = array.slice();
	if (ind) {
		const len = numbers.length;
		if (ind >= 0){
			let reversedSubarray = numbers.slice(ind).reverse();
			return numbers.slice(0, ind).concat(reversedSubarray);
		} else {
			let subarray = numbers.slice(ind);
			return numbers.slice(0, len+ind).reverse().concat(subarray);
		}
	}
	else {
		return numbers.reverse();
	}
};
