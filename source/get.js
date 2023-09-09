'use strict';

/**
 * @param {string} object
 * @param {Array} properties
 * @returns {undefined|*}
 * @description Рекурсивная вспомогательная функция для получения свойств объекта
 */
function getImpl(object, properties) {
    if (!properties.length) {
        return object
    }

    if (object[properties[0]] !== undefined) {
        return getImpl(object[properties[0]], properties.slice(1))
    }

    return undefined;
}
/**
 * @param {object} object Объект, свойство которого мы хотим получить
 * @param {string} query Dot notation запрос для получения свойства некоторой вложенности
 * @returns {*|undefined} Свойство, другой вложенный объект, сам объект(при query === '.'), undefined, если такого свойства нет
 * @description Возвращает свойтсво объекта(в т.ч. вложенное) при его наличии.
 * В ином случае возвращает undefined
 */
function get(object, query) {
    if (arguments.length < 2 || query == undefined) {
        return undefined;
    }
    if (query === '.') {
        return object;
    }
    const properties = query.slice(1).split('.');
    return getImpl(object, properties);
}
