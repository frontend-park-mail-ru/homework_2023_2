'use strict';

/** 
 * Функция принимает на вход массив plain-объектов и массив имён свойств, по которым необходимо отсортировать массив объектов, 
 * и реализует устойчивую сортировку этого массива в порядке возрастания (строки сортируются лексикографически, числа — в порядке возрастания)
 * 
 * @param {Object[]} plainArray - Массив объектов
 * @param {string[]} nameArray - Массив имен свойств
 * @returns {Object[]} - Отсортированный массив
 * @throws {TypeError} - В случае неправильных входных данных
 */
function sorting(plainArray, nameArray) {
  if (!Array.isArray(plainArray) || !Array.isArray(nameArray)) {
    throw new TypeError('Wrong input');
  }

  if (plainArray.some(item => (typeof item === 'object' && (item instanceof String || item === null)) || (typeof item !== 'object'))) {
    throw new TypeError('Wrong input');
  }
  if (nameArray.some(name => ((typeof name !== 'string' && !(name instanceof String)) || name === null))) {
    throw new TypeError('Wrong input');
  }


  if (nameArray.length === 0 || plainArray.length === 0) {
    return plainArray;
  }

  nameArray.forEach((key) => {
    let lastType = null;
    plainArray.forEach(item => {
      if (!(key in item)) {
        throw new TypeError("Some element of plain array 'item' hasn't name 'key' from name array");
      }
      if (lastType != null && lastType != typeof item[key]) {
        throw new TypeError('Plain array has different type item of same name objects');
      }
      lastType = typeof item[key];
    });
  });

  return plainArray.sort((a, b) => {
    let res = 0;
    nameArray.forEach(name => {
      if (res !== 0){
        return
      }
      if (a[name] > b[name]){
        res = 1;
        return
      }
      if (a[name] < b[name]) {
        res = -1;
        return
      }
    });
    return res;
  });
}
