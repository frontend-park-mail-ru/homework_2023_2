'use strict';

/**
 * Создание ASCII-шахматной доски размером boardSize*boardSize
 * @param {number} boardSize - размер доски
 * @returns {string} Шахматная доска
 */
const chess = (boardSize) => {
    if (!(typeof boardSize) === "number" || !(typeof boardSize) === "string"
        || boardSize <= 1 || boardSize % 1 != 0) return null
    let result = ""
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            result += (i + j) % 2 == 0 ? "*" : " "
        }
        result += "\n"
    }
    return result
}
