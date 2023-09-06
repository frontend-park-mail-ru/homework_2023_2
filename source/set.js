'use strict';


/**
 * 
 * @param {Object} object - передаваемый объект
 * @param {string} path - путь к полю
 * @param {any} value - устанавливаемое значение
 * @returns {Object} - исходный объект с установленным значением
 */
const set = (object, path, value) => {
    const keys = path.split('.');
    let currentObject = object;

    for (let i = 0; i < keys.length; i++) {
        const field = keys[i];

        if (i === keys.length - 1) {
            currentObject[field] = value;
        } else if (field.length > 0) {
            if (!currentObject[field]) {
                currentObject[field] = {};
            }
            currentObject = currentObject[field];
        }
    }

    return object;
};