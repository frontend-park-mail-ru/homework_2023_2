//Дмитриев Александр Web-22
'use strict';

function roman(input) {

    if (Number(input)) {
        // Arabic to Roman

        if (input <= 0 || input >= 3999) {
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

        for (const num of romanNum) {
            while (input >= num.value) {
                out += num.symbol;
                input -= num.value
            }
        }

        return out
    } else {
        //Roman to Arabic
        if (!/^[IVXLCDMivxlcdm]+$/.test(input)) {
            return "Error";
        }

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
            const curRomanVal = romanNum[input[i]];
            const nextRomanVal = romanNum[input[i+1]];

            if (nextRomanVal && curRomanVal < nextRomanVal) {
                out -= curRomanVal;
            } else {
                out += curRomanVal
            }
        }

        return out
    }


}
