"use strict";

const getNumbersArr = (str) => {
  let arrToRet = [];

  const strs = str.split(" ");
  strs.forEach((el) => {
    const tmp = parseFloat(el);
    if (!isNaN(tmp)) {
      arrToRet.push(tmp);
    }
  });
  return arrToRet;
};

const minmax = (numbers) => {
  if (typeof numbers === "string") {
    const numbersArr = getNumbersArr(numbers);

    if (numbersArr.length === 0) {
      return [undefined, undefined];
    }

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    numbersArr.forEach((element) => {
      min = element < min ? element : min;
      max = element > max ? element : max;
    });

    return [min, max];
  }
};
