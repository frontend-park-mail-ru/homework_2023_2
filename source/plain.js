'use strict';

/**
 * @param {Array} initialArray Массив массивов, входящие массивы могут быть любой вложенности.
 * @return {Array} unpackedArray Результирующий массив, включающий все элементы исходного.
 */
const plain = function (nestedArray) {
    console.log(nestedArray)
    if (Array.isArray(nestedArray)) {
        const plainInner = (nestedArray) => nestedArray.reduce((unpackedArray, arrayValue) => unpackedArray.concat(Array.isArray(arrayValue) ? plainInner(arrayValue) : arrayValue), [])
        return plainInner(nestedArray)
    }
    else {
        return []
    }
}

// const plain = function (nestedArray) {
//     let unpackedArray = []
//     nestedArray.forEach(arrayItem => Array.isArray(arrayItem) ? unpackedArray = unpackedArray.concat(plain(arrayItem)) : unpackedArray.push(arrayItem))
//     return unpackedArray
// };
