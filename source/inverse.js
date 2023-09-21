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
function inverse(array, offset = 0) {
	if (!Array.isArray(array)) {
		throw new TypeError('Некоретный тип входных данных - неверно задан массив');
	}

	if (typeof offset !== 'number') {
		throw new TypeError('Некоретный тип входных данных - неверно задан сдвиг, должен быть числом');
	}

	let left = ( offset > 0 ? offset : 0);
	let right = ( offset < 0 ? array.length - 1 + offset : array.length - 1)

	const iterations = Math.floor((right - left) / 2) + 1;

	for (let i = 0; i < iterations; i++) {
		const temp = array[left];
		array[left] = array[right];
		array[right] = temp;

		left++;
		right--;
	}

	return array;
}
