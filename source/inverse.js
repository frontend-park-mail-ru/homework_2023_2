'use strict';

function inverse(array, value = 0) {
	let left;
	let rigth;

	if (value > 0) {
		left = value;
		rigth = array.length - 1;
	} else if (value < 0) {
		left = 0;
		rigth = array.length - 1 + value;
	} else {
		left = 0;
		rigth = array.length - 1;
	}

	while (left < rigth) {
		let temp = array[left];
		array[left] = array[rigth];
		array[rigth] = temp;

		left++;
		rigth--;
	}

	return array;
}