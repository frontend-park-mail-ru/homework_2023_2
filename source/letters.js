'use strict';

/**
 * Возвращает words, удалив все неуникальные символы,
 *      либо оставив только первое или последнее вхождение.
 *
 * @param {string} words строка, из которой удаляются неуникальные символы.
 * @param {boolean} parameter определяет оставить ли первое
 *      или последнее вхождение каждого неуникального символа.
 * @return {string} words, строка, из которой удалены неуникальные символы.
 * @throws {TypeError} аргумент words должен быть строкой, а аргумент parameter типа boolean.
 */
const letters = (words, parameter = null) => {
    if (typeof words !== 'string' && !(words instanceof String)) {
        throw TypeError('incorrect type of param words');
    }

    const array = Array.from(words);

    switch (parameter) {
        case null:
            const countEntries = new Map();
            array.forEach(word => countEntries.has(word) ?
                countEntries.set(word, countEntries.get(word) + 1) : countEntries.set(word, 1));

            return array.filter(word => countEntries.get(word) === 1).join('');

        case true:
            return array.filter((word, index) => array.indexOf(word) === index).join('')

        case false:
            return array.filter((word, index) => array.lastIndexOf(word) === index).join('')

        default:
            throw new TypeError('incorrect type of param parameter');
    }
}
