// Комаров Дитрий Web 21
'use strict';

/**
 * the function sets a value to a nested object at a given path.
 * @param {object} obj - given object.
 * @param {string} path - property path.
 * @param {*} value - The value to be set.
 * @returns {Error|object}
 */
const set = (obj, path, value) => {

    if (typeof obj !== 'object' || typeof path !== 'string') {
        return new Error("No correct parametr's")
    }

    if (path.startsWith('.')) {
        path = path.slice(1)
    }

    const keys = path.split('.');
    
    keys.reduce((current, key, index) => {
        if (!current[key]) {
            current[key] = {}
        }

        if (index === keys.length - 1) {
            current[key] = value
        }

        return current[key];
    }, obj);

    return obj;
}

