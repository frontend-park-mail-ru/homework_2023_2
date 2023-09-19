'use strict';

/** 
 * Функция принимает на вход массив plain-объектов и массив имён свойств, по которым необходимо отсортировать массив объектов, 
 * и реализует устойчивую сортировку этого массива в порядке возрастания (строки сортируются лексикографически, числа — в порядке возрастания)
 * 
 * @param {Object[]} plainArray - Массив объектов
 * @param {string[]} nameArray - Массив имен свойств
 * @returns {Object[]} - Отсортированный массив
 */
function sorting(plainArray, nameArray) {
  if (plainArray == null || nameArray == null || typeof plainArray != "object" || typeof nameArray != "object" || 
    plainArray.some(item => {return typeof item != "object"}) ||
    nameArray.some(name => {return typeof name != "string"})) {
    throw new TypeError("Wrong input")    
  }
  if (nameArray.length == 0 || plainArray.length == 0) return plainArray;
  console.log(typeof plainArray, typeof nameArray)

  nameArray.forEach((key) => {
    let lastType = null
    plainArray.forEach(item => {
      if (!(key in item)) {
        throw new TypeError("Some element of plain array 'item' hasn't name 'key' from name array")
      }
      if (lastType != null && lastType != typeof item[key]) {
        throw new TypeError("Plain array has different type item of same name objects")
      }
      lastType = typeof item[key]
    })
  })

  return plainArray.sort((a, b) => {
    for (let name of nameArray) {
      if (a[name] > b[name]) return 1;
      if (a[name] == b[name]) continue;
      if (a[name] < b[name]) return -1;
    }
    return 0;
  });
}
