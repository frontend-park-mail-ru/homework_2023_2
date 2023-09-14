'use strict';

/**
 * @param {Array} array - Массив элементов
 * @description Функция рекурсивно обходит вложенные массивы, добавляя их элементы в результирующий одномерный массив
 * @returns {Array} Результирующий одномерный массив, содержащий в себе все элементы вложенных
 * @throws {TypeError} Бросает исключение, если аргумент не является массивом
 */
const plain = (array) => {
    if (!Array.isArray(array)) {
        throw new TypeError('argument is not Array');
    }

    return array.reduce((cur, elm) => {
        if (Array.isArray(elm)) {
            return [...cur, ...plain(elm)];
        } else {
            return [...cur, elm];
        }
    }, []);
};

