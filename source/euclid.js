'use strict';

/**
 * Вычисление наибольшего общего делителя для переданных аргументов
 * @param {...number} numbers - Числа, для которых нужно вычислить наибольший общий делитель
 * @returns {number} - Наибольший общий делитель переданных чисел
 * @throws {TypeError} - Аргумент должен быть последовательнстью натуральных чисел
 */

const euclid = (...numbers) => {

	if (!(Array.isArray(numbers)
			&& numbers.length
			&& numbers.every(
				(arg) => Number.isInteger(arg) && arg > 0 && arg !== Number.MAX_VALUE
		  	)
		)) {
		throw new TypeError('expected sequence of natural numbers');
	}

	return numbers.reduce((nod, num) => {
		while (num && nod) {
			num >= nod ? (num %= nod) : (nod %= num);
		}
		return num || nod;
	});
};
