'use strict'

/**
 * euclid() calculates the greatest common divisor (GCD) using the Euclid method
 * @param {...number} args - GCD is calculated for all these numbers
 * @returns {number} - GCD of numbers passed
 * @throws {Error} if at least one of the passed arguments is not an integer or args is empty
 */
export const euclid = (...args) => {
    if (args.length === 0) {
        throw Error("len of args should be > 0");
    }

    args.forEach((item, i) => {
        if (!Number.isInteger(item)) {
            throw Error(`args consist non integer element = ${item} with idx = ${i}`);
        }
    });

    const GCD = args.reduce(calcGCD);

    return Math.abs(GCD);
};

/**
 * Calculates gcd for two numbers. There is no check for an integer type, because this check in current use happens at high level in the euclid function
 * @param {number} firstNum - The first number.
 * @param {number} secondNum - The second number.
 * @returns {number} - GCD of two numbers. Returns Nan if one of the given numbers is NaN.
 */
const calcGCD = (firstNum, secondNum) => {
    let firstNumber = firstNum;
    let secondNumber = secondNum;

    while (secondNumber !== 0) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber % secondNumber];
    }

    return firstNumber;
};
