'use strict';

/**
 * @param {Array} array - Массив элементов
 * @description Функция рекурсивно обходит вложенные массивы, добавляя их элементы в результирующий одномерный массив
 * @returns {Array} Результирующий одномерный массив, содержащий в себе все элементы вложенных
 */
const plain = function (array) {
    if (!(array instanceof Array)) {
        return array;
    }

    const res = [];

    array.forEach((elm) => {
        if (elm instanceof Array) {
            res.push(...plain(elm));
        } else {
            res.push(elm);
        }
    })

    return res;
};

