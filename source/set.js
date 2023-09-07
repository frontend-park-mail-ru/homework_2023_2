'use strict';

/**
 * @param {Object} object - передаваемый объект
 * @param {string} path - путь к полю
 * @param {any} value - устанавливаемое значение
 * @returns {Object} - исходный объект с установленным значением
 */
const set = (object, path, value) => {

    if (object === null || object === undefined || typeof object !== 'object' || typeof path !== 'string') {
        return object;
    }

    const keys = path.split('.').filter(key => key)

    if (keys.length === 0) {
        return object;
    }
    else if (keys.length === 1) {
        object[keys[0]] = value;
        return object;
    }
    else {
        /**
         * Использование ссылки current на object нужно для того,
         * чтобы я мог последовательно двигаться по исходному объекту
         */
        let current = object;
        keys.forEach((key, i) => {
            if (i === keys.length - 1) {
                current[key] = value;
            } else if (!current[key] || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        })
    }
    return object;
};
