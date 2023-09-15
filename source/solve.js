'use strict'
/**
 * @param {string} equation - Исходное выражение
 * @param {number} x_value - Значение для подстановки в x
 * @description Подставновка в выражение с x, соответсвующего значени
 * @returns {number} Вычисленное значение после подставновки x
 * @throws {TypeError} Проверка типа входных данных
 * @throws {Error} Проверка выражения
 * @throws {Error} Проверка наличиия x в выражении
 */
const solve = function (equation, x_value) {
    if ((typeof equation !== 'string') || typeof x_value !== 'number') {
        throw new TypeError('Введен некоретный тип входных данных!');
    }
    if (equation.match(/[^-+)(\/\*x\d\s]/)) {
        throw new Error('Введено некоретное выражение!');
    }
    if (!equation.match(/x/)) {
        throw new Error('В выражениее отсутсвует x!');
    }
    const replacing_x_to_digit = equation.replaceAll('x', String(x_value));
    return eval(replacing_x_to_digit);
};