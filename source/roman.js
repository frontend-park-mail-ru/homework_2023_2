//Дмитриев Александр Web-22
'use strict';

/**
 * Перевод из римских цифр в арабские и наоборот.
 * @param {number|string} input - Изначальное число
 * @returns {number|string} - Вернет результат перевода
 */

const romanNum = [
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

const roman = input => {
    //Проверка символов
    if (!/^[IVXLCDM\d]+$/i.test(input) || typeof input !== 'number' && typeof input !== 'string') {
        throw "Error";
    }

    if (Number.isInteger(Number(input))) {
        // Arabic to Roman

        if (input <= 0 || input >= 3999) {
            throw "Error";
        }

        return romanNum.reduce((res, num) => {
            while (input >= num.value) {
                res += num.symbol;
                input -= num.value;
            }
            return res;
        }, '');

    } else {
        //Roman to Arabic

        input = input.toUpperCase()

        let out = 0;

        const romNum = romanNum.reduce(function (result, romanNum) {
            return {
                ...result,
                [romanNum.symbol]:romanNum.value,
            }
        }, {})

        for (let i = 0; i < input.length; i++) {
            romNum[input[i+1]] && romNum[input[i]] < romNum[input[i+1]] ? out -= romNum[input[i]] : out += romNum[input[i]];
        }

        return out
    }
}