'use strict';

const solve = (...args) => {
    let [expression, value] = args;
    return eval(expression.replaceAll("x", value));
};
