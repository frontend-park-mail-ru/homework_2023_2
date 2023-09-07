//Дмитриев Александр Web-22
'use strict';

/**
 * Перевод из римских цифр в арабские и наоборот.
 * @param {number} number - Арабское число
 * @param {string} number - Римское число
 * @returns {number} - Вернет результат перевода из римского числа
 * @returns {string} - Вернет результат перевода из арабского числа
 */

let roman = input => {
    //Проверка символов
    if (!/^[IVXLCDMivxlcdm0123456789]+$/.test(input)) {
        return "Error";
    }

    if (Number(input) || input === 0) {
        // Arabic to Roman

        if (input <= 0 || input >= 3999 || !Number.isInteger(Number(input))) {
            return "Error";
        }

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

        let out = '';

        romanNum.forEach(
            num => {
                while (input >= num.value) {
                    out += num.symbol;
                    input -= num.value
                }
            }
        )

        return out
    } else {
        //Roman to Arabic

        input = input.toUpperCase()

        const romanNum = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        let out = 0;

        for (let i = 0; i < input.length; i++) {
            romanNum[input[i+1]] && romanNum[input[i]] < romanNum[input[i+1]] ? out -= romanNum[input[i]] : out += romanNum[input[i]];
        }

        return out
    }
}
