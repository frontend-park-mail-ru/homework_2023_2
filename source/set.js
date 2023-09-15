'use strict';

/**
 * @param {Object} object - передаваемый объект
 * @param {string} path - путь к полю
 * @param {any} value - устанавливаемое значение
 * @returns {Object} - исходный объект с установленным значением
 */
const set = (object, path, value) => {

    if (!(object instanceof Object)) {
        throw new TypeError('Неверный тип объекта');
    } else if (!object) {
        throw new Error('Неверное значение объекта');
    } else if (!(path instanceof String || typeof path === 'string')) {
        throw new TypeError('Путь должен быть строкой');
    } else if (!path) {
        throw new Error('Путь должен быть')
    } else if (value === undefined) {
        throw new Error('Не передано значение')
    }

    const keys = path.split('.').filter(key => key);
    const lastKey = keys.pop(); // Удаляем последний элемент и сохраняем его

    if (!keys.length) {
        object[lastKey] = value;
        return object;
    }

    keys.reduce((acc, key) => {
        if (!acc[key] || typeof acc[key] !== 'object') {
            acc[key] = {};
        }
        return acc[key];
    }, object)[lastKey] = value;

    return object;
};
