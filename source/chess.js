'use strict';

const BLACK_FIELD = ' ';
const WHITE_FIELD = '*'

/**
 Функция генерирует строку шахматной доски
 @param {number} size - длина строки
 @param {string} firstField - первый элемент строки, может быть BLACK_FIELD или WHITE_FIELD в зависимости от того, рисуем четную или нечетную строку
 @returns {string} - строка шахматной доски
 */
const makeLine = (size, firstField) => {
    let line = Array.from({length: size}, (size, i) => {
        return (i++ % 2) ? WHITE_FIELD : BLACK_FIELD
    })
    if (firstField === WHITE_FIELD) { line.unshift(WHITE_FIELD); line.pop(); };
    line.push('\n');
    return line.join("");
}

/**
 Функция рисует рисует ASCII-шахматрую доску размером N*N символов из звёздочек
 (в левом верхнем углу всегда стоит звёздочка)
 @param {number} size - размер доски
 @returns {string} - строка, изображающая шахматную доску
 */
const chess = (size) => {
    if (size <= 1) { return null };
    let field = '';
    let oddLine = makeLine(size, BLACK_FIELD)
    let evenLine = makeLine(size, WHITE_FIELD)

    for (let i = 1; i <= size; i++) {
        (i % 2)
            ? (field += evenLine)
            : (field += oddLine)
    }
    return field;
};

