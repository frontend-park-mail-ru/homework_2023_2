'use strict';

/**
 * Принимать на вход массив массивов и создавёт из них один общий массив.
 * 
 * @param {Array} input Входной массив массивов.
 * @return {Array} объединённый общий массив.
 * @throws Выдасть ошибку TypeError, если передан НЕ массив.
 */
const plain = (input) => {
    if (!Array.isArray(input)) {
        throw new TypeError("Input must be an array");
    }

    return input.reduce(
            (arr, elem) => (
                Array.isArray(elem) ? 
                arr.concat(plain(elem)) : 
                arr.concat(elem)
            )
        , []);
}
