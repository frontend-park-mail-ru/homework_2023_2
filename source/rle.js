'use strict';

/**
 * Возвращает строку, сжатую по методу кодирования длин серий
 *
 * @param {string} stringToCompress Строку, которую надо сжать
 * @return {string} сжатая строка 
 */
function rle(stringToCompress) {
    // Проверка на тип, единственный вариант который работал
    if (!(typeof stringToCompress === 'string')){
        return null
    }
    // RegExpr, обозначающее все группы повторяющихся символов
    const regex = new RegExp(/(.)\1+/, 'g')

    // Функция, заменяющая найденные группы их первым символом и длиной группы
    const replacementFunc = function(match, symbol1) {
        return symbol1 + match.length;
    }

    return stringToCompress.replaceAll(regex, replacementFunc);
}