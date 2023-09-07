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
    let array = Array.from(words)

    switch (parameter) {
        case null:
            let countEntries = new Map();
            array.forEach(word => countEntries.has(word) ?
                countEntries.set(word, countEntries.get(word) + 1) : countEntries.set(word, 1))

            array = array.filter(word => countEntries.get(word) === 1)
            break;

        case true:
            array = array.filter((word, index) => array.indexOf(word) === index);
            break;

        case false:
            array = array.filter((word, index) => array.lastIndexOf(word) === index);
            break;
    }

    return array.join('')
}
