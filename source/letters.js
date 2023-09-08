'use strict';

/**
 * Возвращает words, удалив все неуникальные символы,
 *      либо оставив только первое или последнее вхождение.
 *
 * @param {string} words строка, из которой удаляются неуникальные символы.
 * @param {boolean} parameter определяет оставить ли первое
 *      или последнее вхождение каждого неуникального символа.
 * @return {string} words, строка, из которой удалены неуникальные символы.
 */
const letters = (words, parameter = null) => {
    if (typeof words === 'string') {
        console.log("incorrect type of param words");
        return '';
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
            console.log("incorrect type of param parameter");
            return '';
    }
}
