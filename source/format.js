'use strict';

/**
 * Функция форматирует переданные целые числа в несколько колонок
 * 
 * @param {Array} input - Входной массив данных, который нужно отформатировать
 * @param {number} columnsNumber - Количество столбцов, на которые нужно разбить массив 
 * @param {string} separator - Символ разделения между столбцами
 * @param {Array} maxLengthAmongRowNumbers - Каждый элемент означает, сколько символов занял столбец
 * @param {string} formattedString - Полученная таблица (число столбцов или отформатированная строка)
 * @throws {Error} - Если columnsNumber не является положительным числом
 * @returns {string} - Полученный ответ
 */
const format = function(input, columnsNumber) {
    const separator = ' ';

    if (typeof columnsNumber !== 'number' || columnsNumber < 0) {
        throw new Error('columnsNumber должен быть положительным числом');
    }

    const maxLengthAmongRowNumbers = [0, 0, 0];
    for (let i = input.length - columnsNumber; i < input.length; i++) {
        maxLengthAmongRowNumbers[i % columnsNumber] = String(input[i]).length;
    }

    let formattedString = '';

    for (let i = 0; i < input.length; i++) {
        formattedString += String(input[i]).padStart(maxLengthAmongRowNumbers[i % columnsNumber]);

        if ((i + 1) % columnsNumber === 0 && (i + 1) != input.length) {
            formattedString += '\n';
        } else if ((i + 1) != input.length) {
            formattedString += separator;
        }
    }

    return formattedString;
}
