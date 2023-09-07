'use strict';

const rle = (string) => {
    let result = '';
    let count = 1;

    string.split('').forEach((char, i) => {
        if (char === string[i + 1]) {
            count++;
        } else {
            result += char + (count > 1 ? count : '');
            count = 1;
        }
    });

    return result;
};
