'use strict';

/**
 * function that solve arithmetic expression 
 * @param  {String, Number} args must contain arithmetic expression and value for "x"
 * @returns {Number} solution of expression
 * @throws Will throw an error if the number of arguments isn't 2.
 * @throws Will throw an error if the type of 1st arg won't String 
 *                                and type of 2nd arg won't Number.
 * @throws Will throw an error if the expression will contain forbidden characters.
 * @throws Will throw an error if the expression won't depend on x.
 */
const solve = (...args) => {
    if (args.length !== 2) {
        throw new Error('Error: incorrect number of arguments');
    }
    let [expression, value] = args;
    if (typeof expression !== 'string' || typeof value !== 'number') {
        throw new Error('Error: incorrect type of arguments');
    }
    if (expression.match(/[^-+)(\/\*x\d\s]/)) {
        throw new Error('Error: found forbidden characters');
    }
    if (!expression.match(/x/)) {
        throw new Error('Error: expression must depend on "x"');
    }
    return eval(expression.replaceAll("x", value));
};
