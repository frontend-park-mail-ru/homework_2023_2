'use strict';

/**
 * @param {Array} initialArray Массив массивов, входящие массивы могут быть любой вложенности.
 * @return {Array} unpackedArray Результирующий массив, включающий все элементы исходного.
 */
const plain = (nestedArray) => {
    const plainInner = (nestedArray) => nestedArray.reduce((unpackedArray, arrayValue) => unpackedArray.concat(Array.isArray(arrayValue) ? plainInner(arrayValue) : arrayValue), [])
    return Array.isArray(nestedArray) ? plainInner(nestedArray) : null
}
