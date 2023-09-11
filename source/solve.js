'use strict'

/**
 * @param {string} equation - Исходное выражение
 * @param {number} x_value - Значение для подстановки в x
 * @description Подставновка в выражение с x, соответсвующего значени
 * @returns {number} Вычисленное значение после подставновки x
 */


const solve = function (equation, x_value) {
    
    let solution = null;
    try {
        equation = equation.replaceAll('x', String(x_value));
    } catch {
        console.log("Неверно введено уравнение");
        throw new Error('Error: incorrect input data');
    }
    solution =  eval(equation);
    console.log(solution);
    return solution;
};