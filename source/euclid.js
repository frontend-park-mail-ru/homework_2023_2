'use strict'

/**
 * euclid() calculates the greatest common divisor (GCD) using the Euclid method
 * @param {...number} args - GCD is calculated for all these numbers
 * @returns {number} - GCD of numbers passed
 * @throws {Error} if at least one of the passed arguments is not an integer or args is empty
 */
export const euclid = (...args) => {
    if (args.length === 0) throw Error("len of args should be > 0");
    if (!Number.isInteger(args[0])) throw Error(`args[0] === ${args[0]} is not integer`);

    return Math.abs(args.reduce((gcd, current, currentIndex) => {
            if (!Number.isInteger(current)) throw Error(`args[${currentIndex}] === ${current} is not integer`);
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

console.log("nessags", euclid(2, 3));