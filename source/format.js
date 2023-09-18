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

    input.sort(function(a,b) {
        var lengthA = String(a).length;
        var lengthB = String(b).length;

        return lengthA - lengthB;
    });

    let maxLengthAmongRowNumbers = new Array(columnsNumber).fill(0);
    for (let i = input.length - columnsNumber; i < input.length; i++) {
        maxLengthAmongRowNumbers[i % columnsNumber] = String(input[i]).length;
    }

    let formattedString = '';

    input.forEach((value, i) => {
        formattedString += String(value).padStart(maxLengthAmongRowNumbers[i % columnsNumber]);
    
        if ((i + 1) % columnsNumber === 0 && (i + 1) !== input.length) {
            formattedString += lineSpace;
        } else if ((i + 1) !== input.length) {
            formattedString += separator;
        }
    });

    return formattedString;
}
