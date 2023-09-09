'use strict';



/**
 * @param {string} number - Число для перевода в другую систему
 * @description Перевод числа из арабской СС в римскую или наоборот, либо сообщение о невалидности данных
 */
const roman = (number) => {

    /**
     * @param {string} str - Число для перевода в другую систему
     * @description Определение, является ли число из арабской системы счисления
     */
    let isArabic = (str) => {
        return /\d+$/.test(str);
    }

    /**
     * @param {string} str - Число для перевода в другую систему
     * @description Определение, является ли число из римской системы счисления
     */
    let isRoman = (str) => {
        return /^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,4})?$/i.test(str);
    }

    const RomanNum = {
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
        "I": 1,
      };

    switch (true){
        case isRoman(number):
            let arabic_result = 0;

            number = number.toUpperCase()

            let i = 0;

            while (i < number.length){
                
                if ( RomanNum[number[i]] < RomanNum[number[i+1]] ) {
                    arabic_result -= RomanNum[number[i]];
                } else {
                    arabic_result += RomanNum[number[i]];
                }
                i = i + 1;
            }

            return arabic_result;
            
        case isArabic(number):
            let roman_result = "" 

            for (let key in RomanNum){
                if (number >= RomanNum[key]){
                    let count = number / RomanNum[key];
                    roman_result += key.repeat(count);
                    number = number % RomanNum[key];
                }
            }
            return roman_result;
            
        default:
            return "invalid input"
    }
};