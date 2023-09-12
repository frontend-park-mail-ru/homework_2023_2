'use strict'

/**
 * euclid() calculates the greatest common divisor (GCD) using the Euclid method
 * @param {...number} args - GCD is calculated for all these numbers
 * @returns {number|NaN} - GCD of numbers passed or Nan if at least one of the passed arguments is not an integer
 */
export const euclid = (...args) => {
    if (args.length === 0 || !Number.isInteger(args[0])) return NaN;

    return Math.abs(args.reduce((gcd, current) => {
            if (!Number.isInteger(current)) return NaN;
            return calcGCD(gcd, current);
        })
    );
};

/**
 * Calculates gcd for two numbers. There is no check for an integer type, because this check in current use happens at a high level in the euclid function
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|NaN } - GCD of two numbers. Returns Nan if one of the given numbers is NaN.
 */
const calcGCD = (a, b) => {
    while (b !== 0 && !isNaN(a)) {
        [a, b] = [b, a % b];
    }

    return a;
};
