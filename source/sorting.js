'use strict';

/**
 * Функция sorting сортирует массив объектов по ключам
 * @param {Object[]} array - Массив объектов
 * @param {string[]} fields - Массив строк-ключей, по которым функция сортирует объекты
 * @returns {Object[]} - отсортированный массив
 * @throws {Error} - исключение, если в объекте массива нет ключа из списка fields
 */
const sorting = (array, fields) => {
  const arrayСp = Array.from(array);
  [...fields].reverse().forEach((field) => {
    arrayСp.sort((a, b) => {
      if (!(field in a)) { // если ключа field нет в словаре a
        throw new Error('the key does not exist');
      }
      if (!(field in b)) { // если ключа field нет в словаре b
        throw new Error('the key does not exist');
      }
      if (!a[field]) { // если значение ключа field в a равно undefined
        return 1; // меняем местами
      }
      if (!b[field]) { // если значение ключа field в b равно undefined
        return -1; // не меняем порядок
      }
      // сравниваем ключи по значению и меняем порядок, если левый >= правого
      return a[field] >= b[field] ? 1 : -1;
    });
  });
  return arrayСp;
};
