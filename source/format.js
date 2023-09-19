'use strict';

/**
 * Функция форматирует переданные целые числа в несколько колонок
 * 
 * @param {Array} maxLengthAmongRowNumbers - Каждый элемент означает, сколько символов занял столбец
 * @param {string} formattedString - Полученная таблица (число столбцов или отформатированная строка)
 * @throws {RangeError} - Если columnsNumber не является переменной типа int
 * @throws {RangeError} - Если columnsNumber не является положительным числом больше нуля
 * @throws {TypeError} - Если input не является массивом
 * @returns {string} - Полученный ответ
 */
const format = function(input, columnsNumber) {
    const separator = ' ';
    const lineSpace = '\n';

    if (typeof columnsNumber !== 'number') {
        throw new TypeError('columnsNumber должен иметь целочисленный тип');
    }

    if (columnsNumber <= 0) {
        throw new RangeError('columnsNumber должен быть положительным числом больше нуля');
    }

    if(!Array.isArray(input)) {
        throw new TypeError('input должен быть массивом');
    }

    const maxLengthAmongRowNumbers = new Array(columnsNumber).fill(0);
    input.forEach((value, i) => {
        const numStr = String(value);
        const index = i % columnsNumber;
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
