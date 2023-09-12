'use strict';

const format = (numbers, cols) => {
	let widths = new Array(cols);
	widths.fill(0);

	numbers.forEach((element, i) => {
		widths[i % cols] = max([
			element.toString().length,
			widths[i % cols]
		]);
	});

	return numbers.reduce((result, element, i) => {
		let strElement = element.toString();
		let prefix = " ".repeat(widths[i % cols] - strElement.length);
		
		let isNotFirstElement = Boolean(i);
		let isNotLastColumn = Boolean(i % cols);

		if (isNotLastColumn) {
			prefix += " ";
		} else if (isNotFirstElement) {
			prefix = "\n" + prefix;
		}

		return result + prefix + strElement;
	}, "");
};

