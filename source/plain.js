'use strict';

/**
 * Принимать на вход массив массивов и создавёт из них один общий массив.
 * В случае не массива возвратит то же, что и пришло.
 *
 * @param {Array} input Входной массив массивов.
 * @return {Array} объединённый общий массив.
 */
const plain = (input) => {
    if (!Array.isArray(input)) {
        return input;
    }

    return input.reduce(
            (arr, elem) => (
                Array.isArray(elem) ? 
                arr.concat(plain(elem)) : 
                arr.concat(elem)
            )
        , []);
}
