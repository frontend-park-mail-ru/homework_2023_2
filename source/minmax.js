'use strict';

function minmax(str) {
    const numbers = str.split(/[^\w\-.а-яА-Я]+/gu)
        .filter(s => s.length > 0)
        .map(s => Number(s))
        .filter(num => !Number.isNaN(num));

    const minAndMax = [ undefined, undefined ];

    if (numbers.length == 0)
        return minAndMax;

    minAndMax[0] = minAndMax[1] = numbers[0];

    numbers.forEach(num => {
        minAndMax[0] = Math.min(num, minAndMax[0]);
        minAndMax[1] = Math.max(num, minAndMax[1]);
    });

    return minAndMax;
}
