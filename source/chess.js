'use strict';

const BLACK_FIELD = ' ';
const WHITE_FIELD = '*';

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
    size = Number(size);
    if (!Number.isInteger(size)) {
        throw new RangeError('Size is not a round number!');
    };
    if (size <= 1) {
        return null;
    };
    let field = (makeLine(size, true) + makeLine(size, false)).repeat(size / 2);
    if (size % 2) {
        field += makeLine(size, true);
    }
    return field;
};

