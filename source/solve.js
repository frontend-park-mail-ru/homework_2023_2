'use strict'

/**
 * @param {string} equation - Исходное выражение
 * @param {number} x_value - Значение для подстановки в x
 * @description Подставновка в выражение с x, соответсвующего значени
 * @returns {number} Вычисленное значение после подставновки x
 */


const solve = function (equation, x_value) {
    
    let solution;
    let char;

    for (let i = 0; i < equation.length; i++) {
        char = equation[i];
        if (char === "x"){
            equation = equation.replace(equation[i], String(x_value));;
        }
    }

    try {
        solution =  eval(equation);
        console.log(solution);
        return solution

    } catch {
        console.log("Неверно введено уравнение");
        throw new Error('Error: incorrect input data');
    }
};