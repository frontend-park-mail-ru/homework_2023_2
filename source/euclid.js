'use strict';

/**
 * Нахождение НОД для двух чисел
 *
 * @param {number} x - число, для которого ищется НОД
 * @param {number} y - число, для которого ищется НОД
 * @returns {number} x - НОД для двух чисел
 */
const gcd = (x, y) => y ? gcd(y, x % y) : x

/**
 * Нахождение НОД для любого количества чисел
 *
 * @param {...numbers} numbers - любое количество чисел
 * @returns {number} НОД для любого количества чисел
*/
const euclid = (...numbers) => {
	if (numbers.some((number) => !Number.isInteger(number))) {
		return null;
	}		
	
	return numbers.map(Math.abs).reduce(gcd, 0);
}
