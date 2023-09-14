'use strict';

/**
 * Функция для форматирования ряда чисел в табличку
 * @param {number[]} numbers - Исходный массив чисел
 * @param {number} cols - Число колонок в таблице
 * @returns {string} Ряд представленный в виде нескольких колонок
 * @throws {TypeError} Несоответствие типов
 */
const format = (numbers, cols) => {
	const numbers_error = new TypeError('numbers: Array of numbers expected');
	const cols_error = new TypeError('cols: Non negative number was expected');

	if (!Array.isArray(numbers)) {
		throw numbers_error;
	}

	if (!numbers.every((number) => {return typeof number === 'number'})) {
		throw numbers_error;
	}

	if (typeof cols !== 'number' || cols < 0) {
		throw cols_error;
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
		
		const isNotFirstElement = i;
		const isNotLastColumn = i % cols;

		if (isNotLastColumn) {
			prefix += " ";
		} else if (isNotFirstElement) {
			prefix = "\n" + prefix;
		}

		return result + prefix + strElement;
	}, "");
};

