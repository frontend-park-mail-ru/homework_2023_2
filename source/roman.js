'use strict'

//determine the type of input expression
function checkTheCorrectnessOfNumber(s) {
    //validate roman and int number
    if (s.trim().match(/^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})?$/i)) {
        return ["roman", s.toUpperCase()];
    } else if (s.trim().match(/^[1-9]\d*$/)) {
        return ["int", Number(s)];
    }
    return [NaN, s];
}

let roman = function (s) {
    //define the const like hashtable
    const ROMAN_DIGITS = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    //validate number and also treat undefined expression
    let result = checkTheCorrectnessOfNumber(String(s));

    let numberType = result[0];
    let number = result[1];

    if (numberType === "roman") {
        let value = 0;
        //iterate all symbols in roman number except last
        for (let i = 0; i < number.length - 1; i++) {
            if (ROMAN_DIGITS[number[i]] < ROMAN_DIGITS[number[i + 1]]) {
                value -= ROMAN_DIGITS[number[i]];
            } else {
                value += ROMAN_DIGITS[number[i]];
            }
        }
        //process last character and avoid the undefined value when going out of bounds of array
        return value + ROMAN_DIGITS[number[number.length - 1]];
    } else if (numberType === "int") {
        let value = "";
        for (let i in ROMAN_DIGITS) {
            //define min roman number that more than current number
            while (number >= ROMAN_DIGITS[i]) {
                value += i;
                number -= ROMAN_DIGITS[i];
            }
        }
        return value;
    }

    return `Your number ${number} is incorrect or it is not a number!`;
};
