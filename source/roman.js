'use strict'

/* Get type of input expression and validate roman and int numbers
*
* @param {string} s - user string expression
* @returns {string|NaN} - returns a string if the input expression is roman, int, or an empty string, and returns NaN in other cases
*/
function getNumberType(s) {
    //validate roman and int number
    if (s === "") {
        return "empty";
    } else if (s.trim().match(/^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})?$/i)) {
        return "roman";
    } else if (s.trim().match(/^[1-9]\d*$/)) {
        return "int";
    }
    return NaN;
}

/* Convert roman to int and vice versa
*
* @param {*} s - user expression
* @returns {string|number}  returns a number if the input expression is a Roman number, and returns a string if the input expression is incorrect or an int number
*/
function roman (s) {
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
    //get type of number and also treat undefined expression
    const numberType = getNumberType(String(s));

    if (numberType === "roman") {
        const upperSymbolsOfInputString = s.trim().toUpperCase().split('');
        return upperSymbolsOfInputString.reduce(function (result, currentRomanDigit, index) {
            if (index !== upperSymbolsOfInputString.length - 1) {
                if (ROMAN_DIGITS[currentRomanDigit] < ROMAN_DIGITS[upperSymbolsOfInputString[index + 1]]) {
                    result -= ROMAN_DIGITS[currentRomanDigit];
                } else {
                    result += ROMAN_DIGITS[currentRomanDigit];
                }
            } else {
                result += ROMAN_DIGITS[currentRomanDigit];
            }
            return result;
        }, 0);
    } else if (numberType === "int") {
        let result = "";
        let number = Number(s);
        for (let i in ROMAN_DIGITS) {
            //define min roman number that more than current number
            while (number >= ROMAN_DIGITS[i]) {
                result += i;
                number -= ROMAN_DIGITS[i];
            }
        }
        return result;
    } else if (numberType === "empty") {
        return 'Your input is empty!';
    }

    return `Your number ${String(s)} is incorrect or it is not a number!`;
}
