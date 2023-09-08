'use strict';

/**
 * @param {Object} object - передаваемый объект
 * @param {string} path - путь к полю
 * @param {any} value - устанавливаемое значение
 * @returns {Object} - исходный объект с установленным значением
 */
const set = (object, path, value) => {

    if (!object || typeof object !== 'object' || typeof path !== 'string') {
        return object;
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
