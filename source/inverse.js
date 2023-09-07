'use strict';

const inverse = function (array, n = 0) {
    if (!Array.isArray(array)) return "Arg1 is not an Array"; 
    if (!Number.isInteger(n)) return "Arg2 is not an Integer"; 
    return n >= 0 ? array.slice(0, n).concat(array.slice(n).reverse()) :
        array.slice(0, n).reverse().concat(array.slice(n));
};
