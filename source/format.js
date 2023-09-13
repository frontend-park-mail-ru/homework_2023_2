'use strict';

const format = function(input, columnsNumber) {
    let maxLengthAmongRowNumbers = new Array(columnsNumber).fill(0);
    for (let i = input.length - columnsNumber; i < input.length; i++) {
        maxLengthAmongRowNumbers[i % columnsNumber] = String(input[i]).length;
    }

    let formattedString = ' ';

    for (let i = 0; i < input.length; i++) {
        if (i != 0) {
            formattedString += String(input[i]).padStart(maxLengthAmongRowNumbers[i % columnsNumber]);
        } else {
            formattedString += String(input[i]).padStart(maxLengthAmongRowNumbers[i % columnsNumber] - 1);
        }

        if ((i + 1) % columnsNumber === 0 && (i + 1) != input.length) {
            formattedString += '\n';
        } else if ((i + 1) != input.length) {
            formattedString += ' ';
        }
    }

    return formattedString;
}
