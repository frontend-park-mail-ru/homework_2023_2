'use strict';

/**
 * Создание ASCII-шахматной доски размером boardSize*boardSize
 * @param {number|string} boardSize - размер доски
 * @returns {string|null} Шахматная доска
 */
const chess = (boardSize) => {
    if ((typeof boardSize !== 'number' && (typeof boardSize !== 'string' || !boardSize instanceof String)) 
    || !isFinite(boardSize) || boardSize <= 1 || boardSize % 1 != 0) {
        throw new TypeError('Проверьте корректность входных данных')
    }

    let firstString = '* '.repeat(boardSize / 2) + '*'.repeat(boardSize % 2) + '\n';
    let secondString = ' *'.repeat(boardSize / 2) + ' '.repeat(boardSize % 2) + '\n';
    let result = (firstString + secondString).repeat(boardSize / 2) + firstString.repeat(boardSize % 2);

    return result;
}
