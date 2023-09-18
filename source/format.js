'use strict';

/**
 * Функция форматирует переданные целые числа в несколько колонок
 * 
 * @param {Array} maxLengthAmongRowNumbers - Каждый элемент означает, сколько символов занял столбец
 * @param {string} formattedString - Полученная таблица (число столбцов или отформатированная строка)
 * @throws {Error} - Если columnsNumber не является положительным числом
 * @returns {string} - Полученный ответ
 */
const format = function(input, columnsNumber) {
    const separator = ' ';
    const lineSpace = '\n'

    if (typeof columnsNumber !== 'number' || columnsNumber <= 0) {
        throw new Error('columnsNumber должен быть положительным числом');
    }

    if(!Array.isArray(input)) {
        throw new Error('input должен быть массивом')
    }

    const maxLengthAmongRowNumbers = new Array(columnsNumber).fill(0);
    input.forEach((value, i) => {
        const numStr = String(value);
        const index = i % columnsNumber
        maxLengthAmongRowNumbers[index] = Math.max(maxLengthAmongRowNumbers[index], numStr.length);
    });

    let formattedStr = '';
    input.forEach((value, i) => {
        formattedStr += String(value).padStart(maxLengthAmongRowNumbers[i % columnsNumber]);
    
        if ((i + 1) % columnsNumber === 0 && (i + 1) !== input.length) {
            formattedStr += lineSpace;
        } else if ((i + 1) !== input.length) {
            formattedStr += separator;
        }
    });

    return formattedStr;
}
