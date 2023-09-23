'use strict';

/**
 * @type {string} - notation for the unary minus operator '-'
 * @constant
 */
const UNARY_MINUS = '~';

/**
 * @type {string} - notation for the opening bracket '('
 * @constant
 */
const OPENING_BRACKET = '(';

/**
 * @type {string} - notation for the closing bracket ')'
 * @constant
 */
const CLOSING_BRACKET = ')';

/**
 * @type {string} - notation for the subtraction operator '-'
 * @constant
 */
const MINUS = '-';

/**
 * @type {string} - notation for the addition operator '+'
 * @constant
 */
const PLUS = '+';

/**
 * @type {string} - notation for the division operator '/'
 * @constant
 */
const DIVISION = '/';

/**
 * @type {string} - notation for the multiplication operator '*'
 * @constant
 */
const MULTIPLICATION = '*';

/**
 * @function
 * Shows the priority (in a mathematical sense) of the operation given
 * 
 * @param {string} operator - some operator
 * @throws {Error} - throws the Error exception if an invalid operator is given
 * @returns {number} - the priority of the operation (the higher result is, the earlier the operation will be executed)
 */
const getPriority = (operator) => {
    switch (operator) {
        case UNARY_MINUS:
            return 4;

        case DIVISION:
        case MULTIPLICATION:
            return 3

        case PLUS:
        case MINUS:
            return 2;

        case OPENING_BRACKET:
            return 1;
        
        case CLOSING_BRACKET:
            return 0;

        default:
            throw new Error('Unknown operator: ' + operator);
    }
};

/**
 * @function
 * Checks if the symbol given is a digit
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
const isDigit = (ch) => ((ch >= '0') && (ch <= '9'));

/**
 * @function
 * Checks if the symbol given is a variable named 'x'
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
const isVariable = (ch) => (ch === 'x');

/**
 * @function
 * Checks if the symbol given is one of the operators: '+', '-', '*' or '/'
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
const isOperator = (ch) => ((ch === PLUS) || (ch === MINUS) || (ch === MULTIPLICATION) || (ch === DIVISION));

/**
 * @function
 * Checks if the symbol or string given is an operand: variable, digit or number
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
//const isOperand = (ch) => (isDigit(ch) || (ch === 'x'));
const isOperand = (ch) => (!isNaN(ch) || (ch === 'x'));

/**
 * @function
 * Checks if the symbol given is an opening bracket
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
const isOpeningBracket = (ch) => (ch === OPENING_BRACKET);

/**
 * @function
 * Checks if the symbol given is an closing bracket
 * 
 * @param {string} ch - some symbol
 * @returns {boolean}
 */
const isClosingBracket = (ch) => (ch === CLOSING_BRACKET);

/**
 * @function
 * Splits the given expression into an array of tokens (operands, operators and brackets)
 * 
 * @param {string} expression - mathematical expression
 * @returns {Array} - array of tokens that the expression contains
 */
const splitExpression = (expression) => {
    const result = [];

    for (let i = 0; i < expression.length;) {
        if (isOperator(expression.charAt(i)) || isOpeningBracket(expression.charAt(i)) ||
            isClosingBracket(expression.charAt(i)) || isVariable(expression.charAt(i))) {
            result.push(expression.charAt(i));
            i++;
        } else {
            let num = '';
            while (isDigit(expression.charAt(i)) && (i < expression.length)) {
                num += expression.charAt(i);
                i++;
            }
            result.push(num);
        }
    }

    return result;
};

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
 * @throws {Error} - may throw the Error exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 */
const validateExpression = (expression) => {
    const operandStack = [];
    const operatorStack = [];

    let isPrevSymbolOperator = false;
    let isPrevSymbolVar = false;

    const expAsArray = expression.split(''); 
    expAsArray.forEach((current) => {
        if (isOperand(current)) {
            operandStack.push(current);

            isPrevSymbolOperator = false;

            switch (isVariable(current)) {
                case true:
                    if (isPrevSymbolVar) {
                        throw new Error('Two variables are in a row');
                    } else {
                        isPrevSymbolVar = true;
                    }

                    break;
                case false:
                    isPrevSymbolVar = false;
                    break;
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
            } else if (isClosingBracket(current)) {
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
            } else {
                throw new Error('Unexpected symbol: ' + current);
            }
        }
    });

    while (operatorStack.length !== 0) {
        const ch = operatorStack.pop();

        if (!isOperator(ch)) {
            throw new Error('Invalid operator or brackets matching is broken');
        }

        if (operandStack.length === 0) {
            throw new Error('Some operands do not match operators');
        } else {
            operandStack.pop();
        }
    }
};

/**
 * @function
 * Converts the mathematical expression given in infix form into postfix form
 * 
 * @param {Array} expression - mathematical expression in form of an array of tokens (operands, operators and brackets)
 * @throws {Error} - may throw an exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 * @returns {Array} - array of tokens that represents a postfix form of the expression
 */
const getPostfixNotation = (expression) => {
    const auxStack = [];
    const result = [];
    let prevToken = '';

    expression.forEach((current) => {
        if (isOperand(current)) {
            result.push(current);
        } else if ((current === OPENING_BRACKET) || ((current === MINUS) && (prevToken === '' || ((prevToken !== CLOSING_BRACKET) && !isOperand(prevToken))))) {
            if (current === MINUS) {
                auxStack.push(UNARY_MINUS);
            } else {
                auxStack.push(current);
            }
        } else if (current === CLOSING_BRACKET) {
            while ((auxStack.length !== 0) && (auxStack[auxStack.length - 1] !== OPENING_BRACKET)) {
                result.push(auxStack[auxStack.length - 1]);
                auxStack.pop();

                if (auxStack.length === 0) {
                    throw new Error("Expected ')'");
                }
            }
            auxStack.pop();
        } else if ((current === PLUS) || (current === MINUS) || (current === MULTIPLICATION) || (current === DIVISION)) {
            while ((auxStack.length !== 0) && ((auxStack[auxStack.length - 1] === UNARY_MINUS) || (getPriority(auxStack[auxStack.length - 1]) >= getPriority(current)))) {
                result.push(auxStack[auxStack.length - 1]);
                auxStack.pop();
            }
            auxStack.push(current);
        } else {
            throw new Error('Unexpected symbol or invalid input');
        }

        prevToken = current;
    });

    while (auxStack.length !== 0) {
        if (isOperand(auxStack[auxStack.length - 1]) || (auxStack[auxStack.length - 1] === OPENING_BRACKET)) {
            throw new Error('Brackets are not matched!');
        } else {
            result.push(auxStack[auxStack.length - 1]);
            auxStack.pop();
        }
    }

    return result;
};

/**
 * @function
 * Calculate the mathematical expression given in postfix form
 * 
 * @param {Array} expression - mathematical expression in postfix form containing tokens (operands and operators)
 * @param {number} root - value of the variable 'x' in the expression
 * @throws {Error} - may throw an exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 * @returns {number|undefined} - if the expression is correct, function will return the value of it or undefined, otherwise function will throw the Error exception
 */
const calculatePostfix = (postfixExp, root) => {
    if (postfixExp.length === 0) {
        return undefined;
    }

    const auxStack = [];

    postfixExp.forEach((current) => {
        if (!isNaN(current)) {
            auxStack.push(parseInt(current));
        } else if (isVariable(current)) {
            auxStack.push(root);
        } else if (current === UNARY_MINUS) {
            auxStack.push(-auxStack.pop());
        } else {
            const right = auxStack.pop();
            const left = auxStack.pop();

            switch (current) {
                case PLUS:
                    auxStack.push(left + right);
                    break;
            
                case MINUS:
                    auxStack.push(left - right);
                    break;
                
                case MULTIPLICATION:
                    auxStack.push(left * right);
                    break;

                case DIVISION:
                    auxStack.push(left / right);
                    break;

                default:
                    throw new Error('Unexpected symbol: ' + current);
            }
        }
    });


    if (auxStack.length === 1) {
        return auxStack.pop();
    } else {
        throw new Error('Incorrect expression');
    }
}

/**
 * @function
 * Solves the given expression but previously checks whether it is valid or not
 * 
 * @param {string} expression - mathematical expression
 * @param {number} root - value of the variable 'x' in the expression
 * @throws {Error} - may throw an exception which is related to incorrect input data (the expression doesn't meet the mentioned standards)
 * @returns {number} - if the expression is correct, function will return the value of it, otherwise function will throw the Error exception
 */
const solve = (expression, root) => {
    if ((typeof expression !== 'string') || (typeof root !== 'number')) {
        throw new Error(`Invalid input types: (${typeof expression}, ${typeof root}) instead of (string, number)`);
    }

    expression = expression.replaceAll(' ', '');
    validateExpression(expression);

    const splittedExp = splitExpression(expression);
    const postfixNotation = getPostfixNotation(splittedExp);

    return calculatePostfix(postfixNotation, root);
};
