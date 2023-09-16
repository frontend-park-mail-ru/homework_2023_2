'use strict';

/**
 * Вычисление наибольшего общего делителя для переданных аргументов
 * @param {number | number[]} numbers - Числа, для которых нужно вычислить наибольший общий делитель
 * @returns {number} - Наибольший общий делитель переданных чисел
 * @throws {TypeError} - Аргумент должен быть последовательнстью натуральных чисел
 */

const euclid = (...numbers) => {

	if (Array.isArray(numbers) && numbers.length == 1 && Array.isArray(numbers[0])) {
		numbers = numbers[0];
	}

	if (!(Array.isArray(numbers)
		&& numbers.length
		&& numbers.every(
			(arg) => (Number.isInteger(arg) && arg > 0 && arg)
		))) {
		throw new TypeError('expected sequence of natural numbers');
	}

	return numbers.reduce((nod, num) => {
		while (num && nod) {
			num >= nod ? (num %= nod) : (nod %= num);
		}
		return num || nod;
	});
};
