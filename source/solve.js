'use strict';

/**
 * @function
 * Checks if the symbol given is a digit
 * 
 * @param {symbol} ch - some symbol
 * @returns {boolean}
 */
const isDigit = ch => ((ch >= '0') && (ch <= '9'));

/**
 * @function
 * Checks if the symbol given is a variable named 'x'
 * 
 * @param {symbol} ch - some symbol
 * @returns {boolean}
 */
const isVariable = ch => (ch === 'x');

/**
 * @function
 * Checks if the symbol given is one of the operators: '+', '-', '*' or '/'
 * 
 * @param {symbol} ch - some symbol
 * @returns {boolean}
 */
const isOperator = ch => ((ch === '+') || (ch === '-') || (ch === '*') || (ch === '/'));

/**
 * @function
 * Checks if the symbol given is an operand: variable or digit
 * 
 * @param {symbol} ch - some symbol
 * @returns {boolean}
 */
const isOperand = ch => (isDigit(ch) || (ch === 'x'));

/**
 * @function
 * Checks if the symbol given is an opening bracket
 * 
 * @param {symbol} ch - some symbol
 * @returns {boolean}
 */
const isOpeningBracket = ch => (ch === '(');

/**
 * @function
 * Checks if the expression given meets following standards:
 * - no operators going in a row
 * - no variables going in a row
 * - no variables named not as 'x'
 * - all brackets correspond to each other
 * - all operators are valid and allowed
 * - all operands have respective operators
 * - the expression is a mathematical one, not any other JS statement, etc.
 * 
 * @param {string} expression - mathematical expression
 * @throws {Error} - may throw an exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 */
const validateExpression = function(expression) {
    const operandStack = [];
    const operatorStack = [];

    let isPrevSymbolOperator = false;
    let isPrevSymbolVar = false;

    for (const current of expression) {
        if (isOperand(current)) {
            operandStack.push(current);

            isPrevSymbolOperator = false;

            if (isVariable(current) && isPrevSymbolVar) {
                throw new Error('Two variables are in a row');
            } else if (isVariable(current) && !isPrevSymbolVar) {
                isPrevSymbolVar = true;
            } else {
                isPrevSymbolVar = false;
            }
        } else if (isOperator(current)) {
            operatorStack.push(current);

            isPrevSymbolVar = false;

            if (!isPrevSymbolOperator) {
                isPrevSymbolOperator = true;
            } else {
                throw new Error('Two operators are in a row');
            }
        } else {
            if (isOpeningBracket(current)) {
                operatorStack.push(current);
            } else {
                let isThereCorrespBracket = false;

                while (operatorStack.length !== 0) {
                    let ch = operatorStack.pop();

                    if (isOpeningBracket(ch)) {
                        isThereCorrespBracket = true;
                        break;
                    } else {
                        if (operandStack.length < 2)
                        {
                            throw new Error('Incorrect bracket sequence');
                        } else {
                            operandStack.pop();
                        }
                    }
                }

                if (!isThereCorrespBracket) {
                    throw new Error('Brackets matching is broken');
                }
            }
        }
    }

    while (operatorStack.length !== 0) {
        const ch = operatorStack.pop();

        if (!isOperator(ch)) {
            throw new Error('Invalid operator');
        }

        if (operandStack.length < 2) {
            throw new Error('Some operands do not match operators');
        } else {
            operandStack.pop();
        }
    }
};

/**
 * @function
 * Solves the given expression but previously checks whether it is valid or not
 * 
 * @param {string} expression - mathematical expression
 * @param {number} root - value of the variable 'x' in the expression
 * @throws {Error} - may throw an exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 * @returns {number} - if the expression is correct, function will return the value of it, otherwise function will throw the Error exception
 */
const solve = function(expression, root) {
    expression = expression.replaceAll(' ', '');
    validateExpression(expression);

    return eval(`const x = ${root}; ` + expression);
};
