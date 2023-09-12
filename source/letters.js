'use strict';

/**
 * Возвращает отфильтрованную строку в зависимости от режима.
 *
 * @param {string} input - входная строка, которая должна пройти фильтрацию.
 * @param {boolean|undefined} mode - режим фильтрации. Если подается true, то то функция будет 
 * искать повторяющиеся символы в строках и удалять их, оставляя на месте только первую встречающуюся букву.
 * Если передано false, то функция будет оставлять только последнюю встречающуюся букву.
 * Если ничего не передано, то будут удаляться из строки все символы, которые встречаются в ней 
 * больше одного раза.
 * @return {string} - отфильтрованная строка.
 * @throws {TypeError} - выдаст ошибку, если в переменные подать неверные типы данных.
 */
const letters = (input, mode) => {
    if (typeof input === 'object' && input instanceof String) {
        input = input.toString();
    }

    if (typeof input !== 'string' || typeof mode !== 'boolean' && typeof mode !== 'undefined') {
        throw new TypeError('Enter the correct data type');
    }

    const array = input.split('');
        
    let filterMode;
    switch (mode) {
        case true:
            filterMode = (element, index) => array.indexOf(element) === index;
            break;
        case false:
            filterMode = (element, index) => array.lastIndexOf(element) === index;
            break;
        default:
            filterMode = (element) => array.lastIndexOf(element) === array.indexOf(element);
            break;
    }
      
    return array.filter(filterMode).join('');
}
