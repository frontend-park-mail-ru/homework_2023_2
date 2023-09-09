'use strict';

/**
 * @param {Array} initialArray Массив массивов, входящие массивы могут быть любой вложенности.
 * @return {Array|null} unpackedArray Результирующий массив, включающий все элементы исходного.
 */
const plain = (nestedArray) => {
    return Array.isArray(nestedArray) ? nestedArray.reduce((unpackedArray, arrayValue) => unpackedArray.concat(Array.isArray(arrayValue) ? plain(arrayValue) : arrayValue), []) : null
}