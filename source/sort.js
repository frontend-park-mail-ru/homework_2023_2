'use strict';

/**
 *  Функция сортирует буквы в словах по алфавиту, а потом получившиеся слова в предложении — тоже.
 *  Первую букву каждого слова она сделает прописной, остальные — строчными.
 *
 * @param {string} inputString - Входная строка, подлежащая сортировке.
 * @returns {string} - Отсортированная строка с заглавными первыми буквами каждого слова.
 * @throws {InvalidArgumentException} - Выкинет ошибку, если тип переданного параметра не String.
 */
const sort = (inputString) => {
    if (typeof inputString !== 'string')
        throw new Error('Входной аргумент должен быть строкой');

    if (!inputString)
        return inputString;

    return inputString.split(' ')
        .map((element) => element.split('')
                .sort((a, b) => a.localeCompare(b, 'ru'))
                .join('')
                .toLowerCase()
                .replace(/^[^ ]/, (letter) => letter.toUpperCase())
        )
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .join(' ');
};
