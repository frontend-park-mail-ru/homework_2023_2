'use strict';

/**
 * Функция проверяет, является ли переданный аргумент не числовым значением или бесконечностью(то есть null, undefined,
 * Array, Object, function, строкой, дающей NaN etc).
 * @param {any} value - проверяемое значение.
 * @returns {boolean} - true, если аргумент - не числовое значение, иначе false.
 */
const invalidNumberValue = (value) =>
  !value || !isFinite(parseFloat(value));

/**
 * Функция добавляет символы в начало строки до заданной длины, по сути это фукция, аналогичная методу padStart у string
 * @param {string} line - исходная строка.
 * @param {number} finalLength - требуемая длина строки.
 * @param {string} [symbolToAdd=' '] - символ для добавления в начало строки. По дефолту - ' '
 * @returns {string} - строка с добавленными символами в начале.
 */
const myPadStart = (line, finalLength, symbolToAdd = ' ') => {
  if (invalidNumberValue(finalLength) || typeof line !== 'string') return '';

  while (line.length < finalLength) {
    line = symbolToAdd + line;
  }

  return line;
};

/**
 * Функция добавляет символы в конец строки до заданной длины. Аналогичная padEnd у string
 * @param {string} line - исходная строка.
 * @param {number} finalLength - требуемая длина строки.
 * @param {string} [symbolToAdd=' '] - символ для добавления в конец строки. По дефолту - ' '
 * @returns {string} - строка с добавленными символами в конце.
 */
const myPadEnd = (line, finalLength, symbolToAdd = ' ') => {
  if (invalidNumberValue(finalLength) || typeof line !== 'string') return '';

  while (line.length < finalLength) {
    line += symbolToAdd;
  }

  return line;
};

/**
 * Функция повторяет заданную строку указанное количество раз. Аналог repeat у string
 * @param {string} line - строка, которую нужно повторить.
 * @param {number} repeats - количество повторений строки.
 * @returns {string} - строка, состоящая из повторений заданной строки.
 */
const myRepeat = (line, repeats) => {
  if (invalidNumberValue(repeats) || typeof line !== 'string') return '';

  let repeatedString = '';
  for (let i = 0; i < repeats; ++i) {
    repeatedString += line;
  }

  return repeatedString;
};

/**
 * Функция, которая создает дерево заданной высоты и возвращает строку с этим деревом
 * @param {number|string} height - высота дерева.
 * @returns {string|null} - строка, представляющая дерево, или null, если высота некорректна.
 */
const tree = (height) => {
  if (invalidNumberValue(height) || height < 3) return null;

  height = Math.floor(height);

  let treeString = '';
  for (let i = 1; i < height; i++) {
    let treeLevel = '';
    treeLevel = myPadStart(treeLevel, height - i - 1);
    treeLevel = myPadEnd(treeLevel, height - 2 + i, '*');
    treeLevel = myPadEnd(treeLevel, (height - 1) * 2 - 1);
    treeString += treeLevel + '\n';
  }
  treeString +=
    myRepeat(' ', height - 2) + '|' + myRepeat(' ', height - 2) + '\n';
  return treeString;
};
