'use strict';

const rle = (input) => {
    let result = '';
    let count = 0;
    let currChar = '';
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) == currChar)
            count++;
        else {
            result += (count > 1 ? String(count) : '');
            currChar = input.charAt(i);
            result += currChar;
            count = 1;
        }
    }
    result += (count > 1 ? String(count) : '');
    return result;
};