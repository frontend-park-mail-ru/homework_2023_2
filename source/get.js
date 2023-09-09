'use strict';

/**
 * @param {object} object Объект, свойство которого мы хотим получить
 * @param {string} query Dot notation запрос для получения свойства некоторой вложенности
 * @returns {*|undefined} Свойство, другой вложенный объект, сам объект(при query === '.'), undefined, если такого свойства нет
 * @description Возвращает свойтсво объекта(в т.ч. вложенное) при его наличии.
 * В ином случае возвращает undefined
 */

const MIN_ARGS_COUNT = 2;
const QUERY_WITHOUT_DOT = 1;
const DOT_SYMBOL = '.';
function get(object, query) {
    if (arguments.length < MIN_ARGS_COUNT || query === undefined || object === undefined) {
        return undefined;
    }
    if (query === DOT_SYMBOL) {
        return object;
    }

    const properties = query.slice(QUERY_WITHOUT_DOT).split(DOT_SYMBOL);
    for (const index in properties) {
        object = object[properties[index]];
        if (object === undefined) {
            break;
        }
    }
    return object;
}
