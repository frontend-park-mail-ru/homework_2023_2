'use strict';

/**
 * 
 * @param {String} str строка, в которой содержатся числа (могут вперемешку с любями другими символами)
 * @return {Number[]} массив из двух чисел, в котором нулевой элемент - минимальное число из стороки, 
 *                    первый элемент - максимальное 
 */
function minmax(str) {
    const numberStrings = str.match(/[+-]?((\d+([.]\d*)?([eE][+-]?\d+)?|[.]\d+([eE][+-]?\d+)?)|Infinity)/gu);
    if (!numberStrings) {
        return [ undefined, undefined ];
    }

    const numbers = [];
    for (const numStr of numberStrings) {
        if (numStr.length > 0) {
            const num = Number(numStr);
            if (!Number.isNaN(num)) {
                numbers.push(num);
            }
        }
    }

    const minAndMax = [ undefined, undefined ];

    if (numbers.length === 0) {
        return minAndMax;
    }

    minAndMax[0] = minAndMax[1] = numbers[0];

    numbers.forEach(num => {
        minAndMax[0] = Math.min(num, minAndMax[0]);
        minAndMax[1] = Math.max(num, minAndMax[1]);
    });

    return minAndMax;
}
