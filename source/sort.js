'use strict';

/**
 *  Функция сортирует буквы в словах по алфавиту, а потом получившиеся слова в предложении — тоже.
 *  Первую букву каждого слова она сделает прописной, остальные — строчными.
 *
 * @param {string} inputString - Входная строка, подлежащая сортировке.
 * @returns {string} - Отсортированная строка с заглавными первыми буквами каждого слова.
 * @throws {TypeError} - Выкинет ошибку, если тип переданного параметра не String.
 */
const sort = (inputString) => {
    if (typeof inputString !== 'string' && !(inputString instanceof String)) {
        throw new TypeError('Входной аргумент должен быть строкой');
    }
    if (!inputString) {
        return inputString;
    }

    return inputString.split(' ')
        .map((element) => element.split('')
                .sort(customSort)
                .join('')
                .toLowerCase()
                .replace(/^[^ ]/, (letter) => letter.toUpperCase())
        )
        .sort(customSort)
        .join(' ');
};

function customSort(a, b) {
    return a.localeCompare(b, 'ru')
}