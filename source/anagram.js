'use strict';

/**
 * Группирует слова - анаграммы .
 *
 * @param {string[]} words - Массив слов.
 * @returns {string[][]} - Массив из масивов - сгрупированных слов анаграмм .
 * @throws {TypeError} Если `words` не является массивом или его элементы не являются строками.
 */

const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError('Параметр `words` должен быть массивом строк.');
    }

    if (!words.every((word) => typeof word === 'string')) {
        throw new TypeError('Все элементы массива `words` должны быть строками.');
    }

    const groups = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');

        if (!groups[sortedWord]) {
            groups[sortedWord] = [];
        }

        groups[sortedWord].push(word);
    }

    const anagramGroups = Object.values(groups).filter((group) => group.length >= 2);

    anagramGroups.forEach((group) => group.sort());

    return anagramGroups.sort();

};
