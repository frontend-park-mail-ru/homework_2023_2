'use strict';

/**
 * This function performs Run Length Encoding compression on the input string
 * @param {string} input 
 * @returns {string}
 * @throws {TypeError} input wasn't of type 'string' or an instance of String
 */
const rle = input => {
    if (!(typeof input === 'string' || input instanceof String)) {
        throw new TypeError(`Improper value type provided! (Must be 'string' or String, '${typeof input}' was provided instead)`);
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
