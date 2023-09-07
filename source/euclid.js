'use strict';

/**
 * Вычисляет наибольший общий делитель для переданных аргументов.
 * @param {...number} args - Числа, для которых нужно вычислить наибольший общий делитель.
 * @returns {number|null} - Наибольший общий делитель переданных чисел или null, если переданы некорректные аргументы.
 */
const euclid = (...args) => {
  const isValid = args.every(arg => typeof arg === 'number' && !isNaN(arg));
  
  if (!isValid) {
    return null;
  }
  
  if (args.length === 0) {
    return null;
  }

  const gcd = args.slice(1).reduce((acc, num) => calculateGCD(acc, num), args[0]);
  
  return Math.abs(gcd);
};

/**
* Вычисляет наибольший общий делитель для двух чисел.
* @param {number} a - Первое число.
* @param {number} b - Второе число.
* @returns {number} - Наибольший общий делитель для двух чисел.
 */
const calculateGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
    
  return a;
};
