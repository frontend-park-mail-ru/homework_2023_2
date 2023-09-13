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
 * @throws {Error} - Вызывает ошибку, если входные данные неверного формата или отрицательные числа.
 */
function roman(input) {
    const isAR = /^[1234567890]+$/.test(input);
    const isRN = /^(M{0,4})(CM|CD|D?C{0,4})(XC|XL|L?X{0,4})(IX|IV|V?I{0,4})(m{0,4})(cm|cd|d?c{0,4})(xc|xl|l?x{0,4})(ix|iv|v?i{0,4})$/i.test(input);

    if (!isAR && !isRN) {
        return 'Неправильный формат ввода';
    }

    let convertedNumber = isAR ? parseInt(input) : romanToArabic(input);
    if (isNaN(convertedNumber) || convertedNumber <= 0) {
        return 'Неправильный формат ввода';
    }

    return isAR ? arabicToRoman(convertedNumber) : romanToArabic(input);
}


/**
 * Преобразует римское число в арабское.
 *
 * @param {string} romanNumber - Римское число (в виде строки).
 * @returns {number} - Арабское число.
 */
function romanToArabic(romanNumber) {
    romanNumber = romanNumber.toLowerCase();
    let result = 0;
    for (let i = 0; i < romanNumber.length; i++) {
        const currentSymbol = romanNumber[i];
        const currentv = ROMAN_TO_ARABIC[currentSymbol];
        const nextSymbol = romanNumber[i + 1];
        const nextv = ROMAN_TO_ARABIC[nextSymbol];

        if (nextv && currentv < nextv) {
            result -= currentv;
        } else {
            result += currentv;
        }
    }
    return result;
}

/**
 * Преобразует арабское число в римское.
 *
 * @param {number} arabicNumber - Арабское число.
 * @returns {string} - Римское число (в виде строки).
 */
function arabicToRoman(arabicNumber) {
    let result = '';
    ROMAN_NUMERAL_VALUES.forEach(romanNumeral => {
        while (arabicNumber >= romanNumeral.v) {
            result += romanNumeral.n;
            arabicNumber -= romanNumeral.v;
        }
    });
    return result;
}


