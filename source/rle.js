'use strict';

/**
 * This functions performs Run Length Encoding compression on the input string
 * @param {string} input 
 * @returns {string}
 */

const rle = input => {
    if (typeof input != "string") {
        throw new TypeError(`Improper value type provided! (Must be 'string', ${typeof input} provided instead`);
    }
    let count = 1;
    let currChar = '';
    let result = input.split('').reduce(
        (accumulator, currentValue) => {
            if (currentValue === currChar) {
                count++;
            }
            else {
                accumulator += ((count > 1) ? String(count) : '') + currentValue;
                currChar = currentValue;
                count = 1;
            }
            return accumulator;
        },
        ''
    )
    result += (count > 1 ? String(count) : '');
    return result;
};
