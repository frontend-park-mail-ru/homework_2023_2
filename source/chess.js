'use strict';

const BLACK_FIELD = ' ';
const WHITE_FIELD = '*'

/**
 Функция генерирует строку шахматной доски
 @param {number} size - длина строки
 @param {boolean} isWhiteFirstField - true если первый элемент строки белый, false - если черный
 @returns {string} - строка шахматной доски
 */
const makeLine = (size, isWhiteFirstField) => {
    const line = Array.from({length: size}, (size, i) => {
        return (i % 2) ? WHITE_FIELD : BLACK_FIELD
    })
    if (isWhiteFirstField) {
        line.unshift(WHITE_FIELD);
        line.pop();
    };
    line.push('\n');
    return line.join("");
}

/**
 Функция рисует рисует ASCII-шахматрую доску размером N*N символов из звёздочек
 (в левом верхнем углу всегда стоит звёздочка)
 @param {number} size - размер доски
 @returns {string} - строка, изображающая шахматную доску
 @throws {'Size is not a round number!'}  - если размер поля не представляет собой целое число
 */
const chess = (size) => {
    if (size % 1 !== 0 ) {
    throw new Error('Size is not a round number!');
    };
    if (size <= 1) {
        return null;
    };
    let field = '';
    const oddLine = makeLine(size, false);
    const evenLine = makeLine(size, true);

    for (let i = 1; i <= size; i++) {
        i % 2
            ? field += evenLine
            : field += oddLine
    }
    return field;
};

