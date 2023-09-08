'use strict';

/**
 * @param {Array} nestedArray Массив массивов, входящие массивы могут быть любой вложенности.
 * @return {Array} unpackedArray Результирующий массив, включающий все элементы исходного.
 */
const plain = function (nestedArray) {
    let unpackedArray = []
    nestedArray.forEach(arrayItem => Array.isArray(arrayItem) ? unpackedArray = unpackedArray.concat(plain(arrayItem)) : unpackedArray.push(arrayItem))
    return unpackedArray
};