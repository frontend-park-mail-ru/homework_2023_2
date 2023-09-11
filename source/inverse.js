'use strict';

function inverse(array, value = 0) {
	let left;
	let right;

	if (value > 0) {
		left = value;
		right = array.length - 1;
	} else if (value < 0) {
		left = 0;
		right = array.length - 1 + value;
	} else {
		left = 0;
		right = array.length - 1;
	}

	while (left < right) {
		let temp = array[left];
		array[left] = array[right];
		array[right] = temp;

		left++;
		right--;
	}

	return array;
}