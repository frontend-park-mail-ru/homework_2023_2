//Дмитриев Александр Web-22
'use strict';

const ROMAN_NUM = [
    {value: 1000, symbol: 'M'},
    {value: 900, symbol: 'CM'},
    {value: 500, symbol: 'D'},
    {value: 400, symbol: 'CD'},
    {value: 100, symbol: 'C'},
    {value: 90, symbol: 'XC'},
    {value: 50, symbol: 'L'},
    {value: 40, symbol: 'XL'},
    {value: 10, symbol: 'X'},
    {value: 9, symbol: 'IX'},
    {value: 5, symbol: 'V'},
    {value: 4, symbol: 'IV'},
    {value: 1, symbol: 'I'},
];

/**
 * Перевод из римских цифр в арабские.
 * @param {string} input - Изначальное число
 * @returns {number} - Вернет результат перевода
 */
const romanToNumber = (input) => {
    let newInput = input.toUpperCase();

    const romNum = ROMAN_NUM.reduce(function(result, ROMAN_NUM) {
        return {
            ...result,
            [ROMAN_NUM.symbol]: ROMAN_NUM.value,
        }
    }, {});

    return newInput.split('').reduce((out, curr, i) => {
        return romNum[newInput[i + 1]] &&
            romNum[curr] <
            romNum[newInput[i + 1]] ?
            out -= romNum[curr] :
            out += romNum[curr];
    }, 0);
}

/**
 * Перевод из арабских цифр в римские.
 * @param {number} input - Изначальное число
 * @returns {string} - Вернет результат перевода
 */
const numberToRoman = (input) => {
    if (input <= 0 || input >= 3999) {
        throw new Error("Invalid number value");
    }

    return ROMAN_NUM.reduce((res, num) => {
        while (input >= num.value) {
            res += num.symbol;
            input -= num.value;
        }
        return res;
    }, '');
}

/**
 * Перевод из римских цифр в арабские и наоборот.
 * @param {number|string} input - Изначальное число
 * @returns {number|string} - Вернет результат перевода
 */
const roman = (input) => {
    //Проверка символов
    if (!/^[IVXLCDM\d]+$/i.test(input) ||
        typeof input !== 'number' &&
        typeof input !== 'string' &&
        !(input instanceof Number) &&
        !(input instanceof String)) {
        throw new TypeError("Invalid data or data type")
    }

    return Number.isInteger(Number(input)) ? numberToRoman(input) : romanToNumber(input);
}

