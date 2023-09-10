"use strict";

/**
 * Функция sorting сортирует массив объектов по ключам
 * @param {Object[]} array - Массив объектов
 * @param {string[]} fields - Массив строк-ключей, по которым функция сортирует объекты
 * @returns {Object[]} - отсортированный массив
 */

const sorting = (array, fields) => {
  const array_cp = Array.from(array);
  fields.reverse().forEach((field) => {
    array_cp.sort((a, b) => {
      if (!(field in a)) {
        console.log("the key", field, "does not exist in object", a);
      }
      if (!(field in b)) {
        console.log("the key", field, "does not exist in object", b);
      }
      return a[field] >= b[field] ? 1 : -1;
    });
  });
  return array_cp;
};
