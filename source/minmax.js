"use strict";

/**
 * Эта функция возвращает массив чисел из переданной ей строки, игнорируя текст.
 * @param {str} str - Строка
 * @returns {arrToRet[]} - массив чисел Float
 * */
const getNumbersArr = (str) => {
  const strs = str.split(" ");
  const arrToRet = strs.map((el) => parseFloat(el)).filter((el) => !isNaN(el));
  return arrToRet;
};

/**
 * Функция находит минимальное и максимальное число в строке чисел.
 *
 * @param {string} numbers - Строка чисел, разделенных пробелами.
 * @returns {number[]} Массив, с минимальным и максимальным числами.
 * Если строка не содержит чисел - возвращается [undefined, undefined].
 */
const minmax = (numbers) => {
  if (typeof numbers != "string") {
    return [undefined, undefined];  
  }

  const numbersArr = getNumbersArr(numbers);
  if (numbersArr.length === 0) {
    return [undefined, undefined];
  }

  const result = numbersArr.reduce(
    (acc, curVal) => {
      acc[0] = curVal < acc[0] ? curVal : acc[0];
      acc[1] = curVal > acc[1] ? curVal : acc[1];
      return acc;
    }, [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);

  return result;
  
};