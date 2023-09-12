'use strict';

/**
 * This function returns a new compressed string using the RLE algorithm.
 * @param {string} string - this is the string that needs to be converted.
 * @returns {string|null} - returns a new compressed string or null if nothing is passed.
 * @throws {TypeError} Invalid object type.
 * */
const rle = (string) => {
    if (typeof string !== 'string') {
        throw new TypeError('TypeError');
    }
    if (string.length === 0) {
        return '';
    }

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
