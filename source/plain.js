'use strict';

/**
 * @param {Array} array - Массив элементов
 * @description Функция рекурсивно обходит вложенные массивы, добавляя их элементы в результирующий одномерный массив
 * @returns {Array} Результирующий одномерный массив, содержащий в себе все элементы вложенных
 */
const plain = function (array) {
    if (!Array.isArray(array)) {
        return array;
    }

    const res = array.reduce((cur, elm) => {
        if (Array.isArray(elm)) {
            return [...cur, ...plain(elm)];
        } else {
            return [...cur, elm];
        }
    }, []);

    return res;
};

