'use strict';

/**
 * Обращает порядок элеметов в массиве.
 * @param {Array} array - Массив для обращения.
 * @param {number} offsetIndex - Количество элементов, остающихся на месте:
 * при положительном значении - с начала массива, при отрицательном - с конца.
 * @returns {Array} - Массив с обратным порядком элементов с учетом offsetIndex.
 * @throws {TypeError} - Если первым аргументом передан не массив 
 * или вторым - не целое число.
 */
const inverse = function (array, offsetIndex = 0) {
    if (!Array.isArray(array)) throw new TypeError("Arg1 is not an Array"); 
    if (!Number.isInteger(offsetIndex)) throw new TypeError("Arg2 is not an Integer");
    if (offsetIndex == 0) return array.reverse(); 
    return offsetIndex > 0 ? array.slice(0, offsetIndex).concat(array.slice(offsetIndex).reverse()) :
        array.slice(0, offsetIndex).reverse().concat(array.slice(offsetIndex));
};
