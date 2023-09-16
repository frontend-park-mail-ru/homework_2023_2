'use strict';

/** 
 * Функция принимает на вход массив plain-объектов и массив имён свойств, по которым необходимо отсортировать массив объектов, 
 * и реализует устойчивую сортировку этого массива в порядке возрастания (строки сортируются лексикографически, числа — в порядке возрастания)
 * 
 * @param {Object[]} plainArray - Массив объектов
 * @param {string[]} nameArray - Массив имен свойств
 * @returns {Object} - Отсортированный массив
 */
function sorting(plainArray, nameArray) {
  if (nameArray.length == 0 || plainArray.length == 0) return plainArray;

  for (const key of nameArray) {
    let lastType = null
    for (const item of plainArray) {
      if (!key in item) {
        return plainArray
      }
      if (lastType != null && lastType != typeof item[key]) {
        return plainArray
      }
      lastType = typeof item[key]
    }
  }
  return plainArray.sort((a, b) => {
    for (let name of nameArray) {
      if (a[name] > b[name]) return 1;
      if (a[name] == b[name]) continue;
      if (a[name] < b[name]) return -1;
    }
    return 0;
  });
}