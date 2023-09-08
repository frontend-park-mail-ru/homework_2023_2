// Комаров Дитрий Web 21
'use strict';

/**
 * the function sets a value to a nested object at a given path.
 * @param {object} obj - given object.
 * @param {string} path - property path.
 * @param {*} value - The value to be set.
 * @returns {object}
 */
const set = (obj, path, value) => {

    const lineSplit = (typeof path === 'string' && path.startsWith('.')) ? path.slice(1) : path;

    if (typeof obj !== 'object' || typeof path !== 'string') {
        throw new Error("No correct parametr's");
    }

    const keys = lineSplit.split('.');
    const lastKey = keys.pop();

    keys.reduce((current, key) => {
        if (!current[key]) {
            current[key] = {};
        }

        return current[key];
    }, obj)[lastKey] = value;

    return obj;
}

