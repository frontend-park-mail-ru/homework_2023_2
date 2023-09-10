'use strict';

/**
 * Нахождение НОД для двух чисел
 *
 * @param {number} x - число, для которого ищется НОД
 * @param {number} y - число, для которого ищется НОД
 * @returns {number} x - НОД для двух чисел
 */
const gcd = (x, y) => y ? gcd(y, x % y) : Math.abs(x);

/**
 * Нахождение НОД для любого количества чисел
 *
 * @param {...number} numbers - любое количество чисел
 * @returns {number} НОД для любого количества чисел
*/
const euclid = (...numbers) => 
	numbers.every(Number.isInteger) 
		? numbers.reduce(gcd, 0) 
		: null;
