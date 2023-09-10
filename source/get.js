'use strict';

/**
 * @param {object} object Объект, свойство которого мы хотим получить
 * @param {string} query Dot notation запрос для получения свойства некоторой вложенности
 * @param {boolean} flag Явно подать значение true, если хотим получать в том числе свойства прототипа
 * @returns {*|undefined} Свойство, другой вложенный объект, сам объект(при query === '.'), undefined, если такого свойства нет
 * @description Возвращает свойтсво объекта(в т.ч. вложенное) при его наличии.
 * В ином случае возвращает undefined
 */

function get(object, query, flag = false) {
    const QUERY_WITHOUT_DOT = 1;
    const DOT_SYMBOL = '.';

    if (!query || !object) {
        return undefined;
    }
    if (query === DOT_SYMBOL) {
        return object;
    }

    return query.slice(QUERY_WITHOUT_DOT).split(DOT_SYMBOL).reduce((object, property) => {
        if (object && (flag || object.hasOwnProperty(property))) {
            return object[property]
        }
    }, object);
}
