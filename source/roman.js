'use strict';

/**
 * @param {string} str - Число для перевода в другую систему
 * @description Определение, является ли число из арабской системы счисления
 */
function isArabic(str) {
    return /\d+$/.test(str);
}

/**
 * @param {string} str - Число для перевода в другую систему
 * @description Определение, является ли число из римской системы счисления
 */
function isRoman(str){
    return /^M{0,3}(CM|CD|D?C{0,3})?(XC|XL|L?X{0,3})?(IX|IV|V?I{0,3})?$/i.test(str);
}

/**
 * @param {string} number - Число для перевода в другую систему
 * @description Перевод числа из арабской СС в римскую или наоборот, либо сообщение о невалидности данных
 */
const roman = (number) => {

    const RomanMap = new Map([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ]);

    switch (true){
        case isRoman(number):
            let arabic_result = 0;

            number = number.toUpperCase()

            for (let i = 0; i < number.length; i++){
                if ( RomanMap.get(number[i]) < RomanMap.get(number[i+1]) ) {
                    arabic_result -= RomanMap.get(number[i]);
                } else {
                    arabic_result += RomanMap.get(number[i]);
                }
            }
            return arabic_result;
            
        case isArabic(number):
            let roman_result = "" 

            RomanMap.forEach((value, key) => {
                if (number >= value){
                    let count = number / value;
                    roman_result += key.repeat(count);
                    number = number % value;
                }
            });
            return roman_result;
            
        default:
            return "invalid input"
    }
};