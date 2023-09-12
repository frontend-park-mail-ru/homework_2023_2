'use strict';

/**
 * Функция для форматирования ряда чисел в табличку
 * @param {number[]} numbers - Исходный массив чисел
 * @param {number} cols - Число колонок в таблице
 * @returns {string} Ряд представленный в виде нескольких колонок
 */
const format = (numbers, cols) => {
	if (!Array.isArray(numbers)) {
		throw new TypeError("numbers: Array of numbers expected");
	}

	if (
		typeof cols !== "number" &&
		typeof cols !== "bigint" &&
		!(cols instanceof Number) &&
		!(cols instanceof BigInt)
	) {

		throw new TypeError("cols: Number was expected");
	}

	let widths = Array(cols).fill(0);

	numbers.forEach((element, i) => {
		widths[i % cols] = max([
			element.toString().length,
			widths[i % cols]
		]);
	});

	return numbers.reduce((result, element, i) => {
		const strElement = element.toString();
		let prefix = " ".repeat(widths[i % cols] - strElement.length);
		
		const isNotFirstElement = Boolean(i);
		const isNotLastColumn = Boolean(i % cols);

		if (isNotLastColumn) {
			prefix += " ";
		} else if (isNotFirstElement) {
			prefix = "\n" + prefix;
		}

		return result + prefix + strElement;
	}, "");
};

