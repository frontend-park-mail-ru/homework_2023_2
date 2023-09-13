"use strict";

/**
 * @param {string} str - Строка
 * @returns {number[]} - массив чисел Float
 * */
const getNumbersArr = (str) => {
  const strs = str.split(' ');
  const arrToRetDirty = strs.map((el) => parseFloat(el));
  const arrToRetCleaned = arrToRetDirty.filter((el) => !isNaN(el));
  return arrToRetCleaned;
};

/**
 * @param {string} numbers - Строка чисел, разделенных пробелами.
 * @returns {(number|undefined)[]} Массив, с минимальным и максимальным числами.
 * Если строка не содержит чисел - возвращается [undefined, undefined]
 */
const minmax = (numbers) => {
  if (!typeof numbers === "string" || numbers instanceof String) {
    return [undefined, undefined];
  }

  const numbersArr = getNumbersArr(numbers);
  if (numbersArr.length === 0) {
    return [undefined, undefined];
  }

  const result = numbersArr.reduce(
    (acc, curVal) => [
      curVal < acc[0] ? curVal : acc[0],
      curVal > acc[1] ? curVal : acc[1],
    ], [Infinity, -Infinity]);

  return result;
  
};