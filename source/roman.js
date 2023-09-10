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
        if (str == ""){
            return false;
        }
        return /\d+$/.test(str);
    }

    /**
     * @param {string} str - Число для перевода в другую систему
     * @description Определение, является ли число из римской системы счисления
     */
    let isRoman = (str) => {
        if (str == ""){
            return false;
        }
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

            number = number.toUpperCase()

            let arabic_result = number.split('').reduce(function(sum, current, index){
                if ( RomanNum[current] < RomanNum[number[index+1]] ) {
                    return sum -= RomanNum[current];
                } else {
                    return sum += RomanNum[current];
                }
            }, 0);

            return arabic_result;
            
        case isArabic(number):

            let roman_result = Object.keys(RomanNum).reduce(function(sum, current){
                if (number >= RomanNum[current]){
                    let count = number / RomanNum[current];
                    number = number % RomanNum[current];
                    return sum += current.repeat(count);
                }
                return sum;
            }, "");

            return roman_result;
            
        default:
            return "invalid input"
    }
};