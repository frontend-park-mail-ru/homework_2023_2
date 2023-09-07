'use strict';

const format = (numbers, cols) => {
	let widths = new Array(cols);
	widths.fill(0);

	let result = "";

	numbers.forEach((element, i) => {
		widths[i % cols] = max([
			element.toString().length,
			widths[i % cols]
		]);
	});

	numbers.forEach((element, i) => {
		let str_element = element.toString();
		let prefix = " ".repeat(widths[i % cols] - str_element.length);

		if (i % cols != 0) {
			prefix += " ";
		} else if (i != 0) {
			prefix = "\n" + prefix;
		}

		result += prefix + str_element;
	});
	
	return result;
};

