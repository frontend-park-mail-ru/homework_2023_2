'use strict';

const max = numbers => Math.max(...numbers);

const inverse = (array, ind) => {
let numbers = array.slice();
	if (ind) {
		const len = numbers.length;
		let subarray1 = numbers.slice(ind)
		let subarray2 = numbers.slice(0, ind)
		if (ind >= 0){
			return subarray2.concat(subarray1.reverse());
		} else {
			return subarray2.reverse().concat(subarray1);
		}
	}
	else {
		return numbers.reverse();
	}
};
