'use strict';

/**
 * Функция проверяет, является ли переданный аргумент не числовым значением или бесконечностью(то есть null, undefined,
 * Array, Object, function, строкой, дающей NaN etc).
 * @param {any} value - проверяемое значение.
 * @returns {boolean} - true, если аргумент - не числовое значение, иначе false.
 */
const invalidNumberValue = (value) =>
  !value || !isFinite(parseFloat(value)) || value instanceof Array;

/**
 * Функция, которая создает дерево заданной высоты и возвращает строку с этим деревом
 * @param {number|string} height - высота дерева.
 * @returns {string|null} - строка, представляющая дерево, или null, если высота некорректна.
 */
const tree = (height) => {
  if (invalidNumberValue(height) || parseFloat(height) < 3) return null;

  height = Math.floor(height);

  let treeString = '';
  for (let i = 1; i < height; i++) {
    treeString +=
      ''
        .padStart(height - i - 1, ' ')
        .padEnd(height - 2 + i, '*')
        .padEnd((height - 1) * 2 - 1, ' ') + '\n';
  }
  treeString += ' '.repeat(height - 2) + '|' + ' '.repeat(height - 2) + '\n';

  return treeString;
};
