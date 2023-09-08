'use strict';

function isArabic(str) {
    return /^[0-9]+$/.test(str);
}

function isRoman(str){
    return /^[IVXLCDMivxlcdm]+$/.test(str);
}

const roman = function (number) {

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

    if (isRoman(number)){

        let result = 0;

        number = number.toUpperCase()

        for (let i = 0; i < number.length; i++){
            if ( RomanMap.get(number[i]) < RomanMap.get(number[i+1]) ) {
                result -= RomanMap.get(number[i]);
            } else {
                result += RomanMap.get(number[i]);
            }
        }

        return result;

    } else if (isArabic(number)){
        
        let result = "" 

        RomanMap.forEach((value, key) => {
            while ( number >= value ){
                result += key;
                number -= value;
            }
        });

        return result;

    } else {
        return "invalid input"
    }

    
};