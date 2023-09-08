//'use strict';
/**
Функция рисует рисует ASCII-шахматрую доску размером N*N символов из звёздочек 
(в левом верхнем углу всегда стоит звёздочка)
@param {number} size - размер доски
*/
const BLACK_FIELD = ' ';
const WHITE_FIELD = '*'
const chess = (size) => {
    if (size <= 1) return null;
    let field = '';
    let i = 0;
    oddLine = Array.from({ length : size }, (size, i) => { if (i++ % 2) return WHITE_FIELD; else return BLACK_FIELD; } )
    evenLine = Array.from({ length : size }, (size, i) => { if (i++ % 2) return BLACK_FIELD; else return WHITE_FIELD; } )
    oddLine.push('\n');
    evenLine.push('\n');
    for (let i = 1; i <= size; i++) {
        if (i % 2) { 
            field += evenLine.join(""); 
        }
        else {
            field += oddLine.join("");
        }
    }
    return field;
};
