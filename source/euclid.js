/**
 * euclid() calculates the greatest common divisor (GCD) using the Euclid method
 * @param {...number} args - GCD is calculated for all these numbers
 * @returns {number} - GCD of numbers passed
 * @throws {Error|TypeError} throw TypeError if at least one of the passed arguments is not an integer and
 * throw Error if args is empty
 */
export const euclid = (...args) => {
    if (args.length === 0) {
        throw Error("len of args should be > 0");
    }

    args.forEach((item, i) => {
        if (!Number.isInteger(item)) {
            throw TypeError(`args consist non integer element = ${item} with idx = ${i}`);
        }
    });

    const GCD = args.reduce(calcGCD);

    return Math.abs(GCD);
};

/**
 * Calculates gcd for two numbers. There is no check for an integer type, because this check in current use happens at high level in the euclid function
 * @param {number} firstNum - The first number.
 * @param {number} secondNum - The second number.
 * @returns {number} - GCD of two numbers.
 */
const calcGCD = (firstNum, secondNum) => {
    if (Math.abs(firstNum) === 1 && Math.abs(secondNum) === 1) {
        return 1;
    }

    let firstNumber = firstNum;
    let secondNumber = secondNum;

    while (secondNumber !== 0) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber % secondNumber];
    }

    return firstNumber;
};
