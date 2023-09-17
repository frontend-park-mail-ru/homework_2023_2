'use strict';

/**
 * @param {string} equation - Исходное выражение
 * @param {number} xValue - Значение для подстановки в x
 * @description Подставновка в выражение с x, соответсвующего значени
 * @returns {number} Вычисленное значение после подставновки x
 * @throws {TypeError} Проверка типа входных данных
 * @throws {Error} Проверка выражения
 * @throws {Error} Проверка наличиия x в выражении
 */
const calculate = (match, equation) => {
    let mulDivRegExpr = /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;
    let plusMinusRegExpr = /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;
    while(mulDivRegExpr.test(equation))
       equation = equation.replace(mulDivRegExpr, (match, a, sign, b) => {return sign == "/" ? a / b : a * b;});
    while(plusMinusRegExpr.test(equation))
       equation = equation.replace(plusMinusRegExpr, (match, a, sign, b) => {return sign == "+" ? Number(a) + Number(b) : a - b;});
    return Number(equation);
}
const evalHandMade = (equation) => {
    while(equation.indexOf("(") !== -1) {
        equation = equation.replace(/\(([^\(\)]*)\)/g, calculate);
    }
    return calculate("", equation);
}
const solve = function (equation, xValue) {
    if ((!(equation instanceof String) && typeof equation !== 'string') || typeof xValue !== 'number') {
        throw new TypeError('Введен некоретный тип входных данных!');
    }
    if (equation.match(/[^-+)(\/\*x\d\s]/)) {
        throw new Error('Введено некоретное выражение!');
    }
    if (!equation.match(/x/)) {
        throw new Error('В выражении отсутсвует x!');
    }
    const replacingXtoDigit = equation.replaceAll('x', String(xValue));
    return evalHandMade(replacingXtoDigit);
};
