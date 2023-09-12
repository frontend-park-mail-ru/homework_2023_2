'use strict';

/**
 * Вычисляет наибольший общий делитель для переданных аргументов.
 * @param {...number} args - Числа, для которых нужно вычислить наибольший общий делитель.
 * @returns {number|Error} - Наибольший общий делитель переданных чисел или null, если переданы некорректные аргументы.
 */
const euclid = (...args) => {
  if (args.length === 0) {
    throw new Error('Not correct args.');
  }
  
  if (!args.every((arg) => typeof arg === 'number' && isFinite(arg) && arg !== Number.MAX_VALUE)) {
    throw new Error('Not correct args.');

  }
  
  const gcd = args.slice(1).reduce((acc, num) => calculateGCD(acc, num), args[0]);
  
  return Math.abs(gcd);
};



/**
* Вычисляет наибольший общий делитель для двух чисел.
* @param {number} firstNumber - Первое число.
* @param {number} secondNumber - Второе число.
* @returns {number} - Наибольший общий делитель для двух чисел.
 */
const calculateGCD = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  
  while (secondNumber !== 0) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber % secondNumber];
  }
    
  return firstNumber;
};


