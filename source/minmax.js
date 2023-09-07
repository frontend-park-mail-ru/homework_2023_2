'use strict';

/**
 * @param inputLine //  Input string
 * @returns {*[]|number[]} //  Array in which the first element is the minimum number, the second element is the maximum
 */

const minmax = inputLine => {
    const numbersLine = inputLine.split(' ').map(Number).filter(word => !isNaN(word));

    const minValue = Math.min(...numbersLine);
    const maxValue = Math.max(...numbersLine);

    return (!inputLine || numbersLine.length === 0) ? [undefined, undefined] : [minValue, maxValue];
}
