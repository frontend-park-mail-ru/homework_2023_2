// Комаров Дитрий Web 21
'use strict';

/**
 * the function sets a value to a nested object at a given path.
 * @param {object} obj - given object.
 * @param {string} path - property path.
 * @param {*} value - The value to be set.
 * @returns {object}
 * @throws {TypeError} If one of the following conditions is not met:
 * - `obj` is not an object or is `null`.
 * - `path` is not a string or an instance of the `String` class.
 */
const set = (obj, path, value) => {
    if (typeof obj !== 'object' || obj === null || (!(typeof path === 'string' || path instanceof String))) {
        throw new TypeError("No correct parametr's");
    }

    const lineSplit = path.startsWith('.') ? path.slice(1) : path;
    const keys = lineSplit.split('.');
    const lastKey = keys.pop();

    const lastProperty = keys.reduce((current, key) => {
        if (!current[key]) {
            current[key] = {};
        }

        return current[key];
    }, obj);

    if (value !==undefined) {
        lastProperty[lastKey] = value;
    }


    return obj;
}
