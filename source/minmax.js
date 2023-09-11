'use strict';

/**
 * 
 * @param {String} str строка, в которой содержатся числа (могут вперемешку с любыми другими символами)
 * @return {Number[]} массив из двух чисел, в котором нулевой элемент - минимальное число из стороки, 
 *                    первый элемент - максимальное 
 */
function minmax(str) {
    if (!(typeof str === 'string' || str instanceof String)) throw TypeError("str argument should be a String");
    
    const minAndMax = [ undefined, undefined ];
    const numberStrings = str.match(/[+-]?((\d+([.]\d*)?([eE][+-]?\d+)?|[.]\d+([eE][+-]?\d+)?)|Infinity)/gu);

    if (!numberStrings) return minAndMax;

    const numbers = numberStrings.reduce((acc, cur) => {
        if (cur.length > 0) {
            const num = Number(cur);
            if (!Number.isNaN(num)) {
                acc.push(num);
            }
        }
        return acc;
    }, []);

    if (!numbers.length) return minAndMax;

    minAndMax[0] = minAndMax[1] = numbers[0];

    numbers.forEach(num => {
        minAndMax[0] = Math.min(num, minAndMax[0]);
        minAndMax[1] = Math.max(num, minAndMax[1]);
    });

    return minAndMax;
}
