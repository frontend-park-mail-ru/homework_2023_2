'use strict';

const ROMAN_TO_ARABIC = {
    'i': 1,
    'v': 5,
    'x': 10,
    'l': 50,
    'c': 100,
    'd': 500,
    'm': 1000
};

const ROMAN_NUMERAL_VALUES = [
    { v: 1000, n: 'M' },
    { v: 900, n: 'CM' },
    { v: 500, n: 'D' },
    { v: 400, n: 'CD' },
    { v: 100, n: 'C' },
    { v: 90, n: 'XC' },
    { v: 50, n: 'L' },
    { v: 40, n: 'XL' },
    { v: 10, n: 'X' },
    { v: 9, n: 'IX' },
    { v: 5, n: 'V' },
    { v: 4, n: 'IV' },
    { v: 1, n: 'I' }
];

/**
 * Преобразует римские числа в арабские и наоборот.
 *
 * @param {string|number} input - Римское число (в виде строки) или арабское число (в виде числа).
 * @returns {string|number} - Результат преобразования в зависимости от входного типа данных.
 * @throws {TypeError} - Вызывает ошибку, если входные данные неверного формата или отрицательные числа.
 */
const roman = (input) => {
    const isAR = /^\d+$/.test(input);
    const isRN = /^(M{0,4})(CM|CD|D?C{0,4})(XC|XL|L?X{0,4})(IX|IV|V?I{0,4})$/i.test(input);

    if ((!isAR && !isRN) || !input) {
        throw new TypeError("Неправильный формат ввода");
    }
    
    return isAR ? arabicToRoman(input) : romanToArabic(input);
};

/**
 * Преобразует римское число в арабское.
 *
 * @param {string} romanNumber - Римское число (в виде строки).
 * @returns {number} - Арабское число.
 */
const romanToArabic = (romanNumber) => {
    const romanNumberChars = romanNumber.toLowerCase().split('');
    return romanNumberChars.reduce((result, currentSymbol, index, array) => {
        const currentv = ROMAN_TO_ARABIC[currentSymbol];
        const nextSymbol = array[index + 1];
        const nextv = ROMAN_TO_ARABIC[nextSymbol];

        if (nextv && currentv < nextv) {
            return result - currentv;
        } else {
            return result + currentv;
        }
    }, 0);
};

/**
 * Преобразует арабское число в римское.
 *
 * @param {number} arabicNumber - Арабское число.
 * @returns {string} - Римское число (в виде строки).
 */
const arabicToRoman = (arabicNumber) => {
    return ROMAN_NUMERAL_VALUES.reduce((result, romanNumeral) => {
        while (arabicNumber >= romanNumeral.v) {
            result += romanNumeral.n;
            arabicNumber -= romanNumeral.v;
        }
        return result;
    }, '');
};
