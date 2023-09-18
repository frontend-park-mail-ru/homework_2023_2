'use strict';

const isDigit = function(ch) {
    if ((ch >= '0') && (ch <= '9')) {
        return true;
    } else {
        return false;
    }
}

const isVariable = function(ch) {
    if (ch === 'x') {
        return true;
    } else {
        return false;
    }
}

const isOperator = function(ch) {
    if ((ch === '+') || (ch === '-') || (ch === '*') || (ch === '/')) {
        return true;
    } else {
        return false;
    }
};

const isOperand = function(ch) {
    if (isDigit(ch) || (ch === 'x')) {
        return true;
    } else {
        return false;
    }
};

const isOpeningBracket = function(ch) {
    if (ch === '(') {
        return true;
    } else {
        return false;
    }
}

const fullOfDigits = function(arr) {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        result = result && isDigit(arr[i]);
    }

    return result;
}

const isValid = function(expression) {
    let result = true;

    let operandStack = [];
    let operatorStack = [];

    let isPrevSumbolOperator = false;
    let isPrevSumbolVar = false;

    for (let i = 0; i < expression.length; i++) {
        let current =  expression.charAt(i);

        if (isOperand(current)) {
            operandStack.push(current);

            isPrevSumbolOperator = false;

            if (isVariable(current) && isPrevSumbolVar) {
                return false;
            } else if (isVariable(current) && !isPrevSumbolVar) {
                isPrevSumbolVar = true;
            } else {
                isPrevSumbolVar = false;
            }
        } else if (isOperator(current)) {
            operatorStack.push(current);

            isPrevSumbolVar = false;

            if (!isPrevSumbolOperator) {
                isPrevSumbolOperator = true;
            } else {
                return false;
            }
        } else {
            if (isOpeningBracket(current)) {
                operatorStack.push(current);
            } else {
                let isThereCorrespBracket = false;

                while (operatorStack.length != 0) {
                    let ch = operatorStack.pop();

                    if (isOpeningBracket(ch)) {
                        isThereCorrespBracket = true;
                        break;
                    } else {
                        if (operandStack.length < 2)
                        {
                            return false;
                        } else {
                            operandStack.pop();
                        }
                    }
                }

                if (!isThereCorrespBracket) {
                    return false;
                }
            }
        }
    }

    while (operatorStack.length != 0) {
        let ch = operatorStack.pop();

        if (!isOperator(ch)) {
            return false;
        }

        if (operandStack.length < 2) {
            return false;
        } else {
            operandStack.pop();
        }
    }

    return result;
};

const solve = function(expression, root) {
    expression = expression.replaceAll(" ", "");

    if (isValid(expression)) {
        return eval(`const x = ${root}; ` + expression);
    } else {
        return null;
    }
};
