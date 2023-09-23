'use strict';

/**
 * Функция inverse меняет порядок элементов в массике на противоположный.
 * Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива кроме нескольких первых (количество зависит от числа).
 * Если число отрицательное — то на месте остаются элементы в конце массива
 * @param {Array.<Object>} array - Исходный массив
 * @param {number} offset - Начальный сдвиг
 * @returns {Array.<Object>} Массив с измененным порядок элементов
 * @throws {TypeError} Проверка типа входных данных. Исключение выбрасывается при неккоректном типе входных данных
 */
let inverse = (array, offset = 0) => {
	if (!Array.isArray(array)) {
		throw new TypeError('Некоретный тип входных данных - неверно задан массив');
	}

	if (typeof offset !== 'number') {
		throw new TypeError('Некоретный тип входных данных - неверно задан сдвиг, должен быть числом');
	}

	const left = ( offset > 0 ? offset : 0);
	const right = ( offset < 0 ? array.length + offset : array.length)

	const array_start = array.slice(0, left);
	const array_mid = array.slice(left, right).reverse();
	const array_end = array.slice(right, array.length);

	return [].concat(array_start).concat(array_mid).concat(array_end);
}
