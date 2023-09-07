'use strict';

/**
 * function that solve arithmetic expression 
 * @param  {String, Number} args must contain arithmetic expression and value for "x"
 * @returns {Number} solution of expression
 */
const solve = (...args) => {
    if (args.length != 2) {
        throw new Error('Error: incorrect number of arguments');
    }
    let [expression, value] = args;
    if (typeof expression != 'string' || typeof value != 'number') {
        throw new Error('Error: incorrect type of arguments');
    }
    if (expression.match(/[^-+)(\/\*x\d\s]/)) {
        throw new Error('Error: found forbidden characters');
    }
    return eval(expression.replaceAll("x", value));
};
