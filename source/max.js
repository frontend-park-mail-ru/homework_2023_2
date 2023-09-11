'use strict';

const max = numbers => Math.max(...numbers);

const inverse = (array, ind) => {
	const numbers = array.slice();
	if (!ind) {
		return numbers.reverse();
	}
	let subarray1 = numbers.slice(ind)
	let subarray2 = numbers.slice(0, ind)
	if (ind >= 0){
		subarray1.reverse();
	} else {
		subarray2.reverse();
	}
	return subarray2.concat(subarray1);
};
