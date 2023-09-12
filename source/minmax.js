'use strict';

/**
 * the function finds the minimum and maximum values in a string
 * @param {string} inputLine - The string of numbers from where it finds minimum and maximum values.
 * @returns {Array} - An array containing the minimum and maximum values.
 * If the input is empty or contains no numbers, returns [undefined, undefined].
 */

const minmax = (inputLine) => {
    if (inputLine == '') {
        return [undefined, undefined];
    } else if (!(typeof inputLine === 'string' || inputLine instanceof String)) {
        return TypeError("Argument in minmax function should be a String");
    }
    const numbersLine = inputLine.split(' ').reduce((accumulator, word) => {
            if (!isNaN(word)) {
                accumulator.push(Number(word));
            }
            return accumulator;
        }, []);

    return !numbersLine.length ? [undefined, undefined] : [Math.min(...numbersLine), Math.max(...numbersLine)];
}
