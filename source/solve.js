'use strict'
/**
 * @param {string} equation - Исходное выражение
 * @param {number} x_value - Значение для подстановки в x
 * @description Подставновка в выражение с x, соответсвующего значени
 * @returns {number} Вычисленное значение после подставновки x
 */
const solve = function (equation, x_value) {
    const replacing_x_to_digit = equation.replaceAll('x', String(x_value));
    return eval(replacing_x_to_digit);
};