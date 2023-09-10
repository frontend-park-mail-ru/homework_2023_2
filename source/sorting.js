"use strict";

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
      if (!(field in a)) {
        throw new Error("the key", field, "does not exist in object", a);
      }
      if (!(field in b)) {
        throw new Error("the key", field, "does not exist in object", b);
      }
      return a[field] >= b[field] ? 1 : -1;
    });
  });
  return arrayСp;
};
