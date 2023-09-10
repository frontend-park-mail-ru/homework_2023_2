'use strict';

/**
 * Возвращает строку, сжатую по методу кодирования длин серий
 *
 * @param {string} stringToCompress Строка, которую надо сжать
 * @return {string} сжатая строка 
 */
const rle = function (stringToCompress) {
    // Проверка на тип, единственный вариант который работал
    if (typeof stringToCompress !== 'string' && !(stringToCompress instanceof String)){
        return null
    }
    // RegExpr, обозначающее все группы повторяющихся символов
    const regex = new RegExp(/(.)\1+/, 'g')

    // Функция, заменяющая найденные группы их первым символом и длиной группы
    const replacementFunc = (match, symbol1) => symbol1 + match.length

    return stringToCompress.replaceAll(regex, replacementFunc);
}
