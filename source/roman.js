'use strict';

/**
 * @param {string} number - Число для перевода в другую систему
 * @description Перевод числа из арабской СС в римскую или наоборот, либо сообщение о невалидности данных
 */
const roman = (number) => {

    /**
     * @param {(string|number)} str - Число для перевода в другую систему
     * @description Определение, является ли число из арабской системы счисления
     */
    const isArabic = (str) => {
        const type = typeof str.valueOf();
        if (str && (type == 'string' ||  type == 'number')){
            return /\d+$/.test(str);
        }
        return false;
    }

    /**
     * @param {string} str - Число для перевода в другую систему
     * @description Определение, является ли число из римской системы счисления
     */
    const isRoman = (str) => {
        if (str && typeof str.valueOf() == 'string'){
            return /^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,4})?$/i.test(str);
        }
        return false;
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

            return number.split('').reduce(function(sum, current, index){
                if ( RomanNum[current] < RomanNum[number[index+1]] ) {
                    return sum -= RomanNum[current];
                } else {
                    return sum += RomanNum[current];
                }
            }, 0);

        case isArabic(number):

            return Object.keys(RomanNum).reduce(function(sum, current){
                if (number >= RomanNum[current]){
                    let count = number / RomanNum[current];
                    number = number % RomanNum[current];
                    return sum += current.repeat(count);
                }
                return sum;
            }, "");
            
        default:
            return "invalid input"
    }
};
