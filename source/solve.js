'use strict';

/**
 * function that solve arithmetic expression 
 * @param  {String, Number} args must contain arithmetic expression and value for "x"
 * @returns {Number} solution of expression
 * @throws {RangeError} Will throw an error if the number of arguments isn't 2.
 * @throws {TypeError} Will throw an error if the type of 1st arg won't String 
 *                                and type of 2nd arg won't Number.
 * @throws {Error} Will throw an error if the expression will contain forbidden characters.
 * @throws {Error} Will throw an error if the expression won't depend on x.
 */
const solve = (...args) => {
    if (args.length !== 2) {
        throw new RangeError('Error: incorrect number of arguments');
    }
    let [expression, value] = args;
    if (String(expression) !== expression || typeof value !== 'number') {
        throw new TypeError('Error: incorrect type of arguments');
    }
    if (expression.match(/[^-+)(\/\*x\d\s]/)) {
        throw new Error('Error: found forbidden characters');
    }
    if (!expression.match(/x/)) {
        throw new Error('Error: expression must depend on "x"');
    }

    const calculate = (expression) => {
        let getValue = function(match, exp) {
            let mulDivRegular = /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;
            let sumSubRegular = /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;
            while(mulDivRegular.test(exp))
               exp = exp.replace(mulDivRegular, (match, a, sign, b) => {return sign == "/" ? a / b : a * b;});
            while(sumSubRegular.test(exp))
               exp = exp.replace(sumSubRegular, (match, a, sign, b) => {return sign == "+" ? Number(a) + Number(b) : a - b;});
            return exp;
        }
        while(expression.indexOf("(") !== -1) {
            expression = expression.replace(/\(([^\(\)]*)\)/g, getValue);
        }
        return getValue("", expression);
    }

    return Number(calculate(expression.replaceAll("x", value)));
};
