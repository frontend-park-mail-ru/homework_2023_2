'use strict';

/**
 * Возвращает отфильтрованную строку в зависимости от режима.
 *
 * @param {string} input - входная строка, которая должна пройти фильтрацию.
 * @param {boolean} mode - режим фильтрации. Если подается true, то то функция будет 
 * искать повторяющиеся символы в строках и удалять их, оставляя на месте только первую встречающуюся букву.
 * Если передано false, то функция будет оставлять только последнюю встречающуюся букву.
 * Если ничего не передано, то будут удаляться из строки все символы, которые встречаются в ней 
 * больше одного раза.
 * @return {string} отфильтрованная строка.
 */
const letters = (input, mode) => {
    if (typeof mode !== 'boolean' && typeof mode !== 'undefined') {
        throw new Error('Type error. Enter the correct data type');
    }

    const array = input.split('');
    
    let filterMode;
    if (mode) { 
        filterMode = (element, index) => array.indexOf(element) === index;
    } else if (mode === false) {
        filterMode = (element, index) => array.lastIndexOf(element) === index;
    } else {
        filterMode = (element) => array.lastIndexOf(element) === array.indexOf(element);
    }

    const pureArray = array.filter(filterMode);
  
    return pureArray.join('');
}
