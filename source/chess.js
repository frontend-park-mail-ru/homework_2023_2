'use strict';

const chess = function (size) {
    if (size <= 1) return null;
    let firstField = '*';
    let secondField = ' ';
    let oddLine = '';
    let evenLine = '';
    let field = '';
    for (let i = 0; i < size; i++) {
        evenLine += firstField;
        oddLine += secondField;
        let tmp = firstField;
        firstField = secondField;
        secondField = tmp;
    }
    oddLine += '\n';
    evenLine += '\n';
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) field += evenLine;
        else field += oddLine;
    }
    return field;
};
