// Комаров Дитрий Web 21
'use strict';

/**
 * the function sets a value to a nested object at a given path.
 * @param {object} obj - given object.
 * @param {string} path - property path.
 * @param {*} value - The value to be set.
 * @returns {object}
 * @throws {InvalidArgumentException}
 */
const set = (obj, path, value) => {
    if (typeof obj !== 'object' || typeof path !== 'string') {
        throw new Error("No correct parametr's");
    }

    const lineSplit = path.startsWith('.') ? path.slice(1) : path;

    const keys = lineSplit.split('.');
    const lastKey = keys.pop();

    const lastProperty = keys.reduce((current, key) => {
        if (!current[key]) {
            current[key] = {};
        }

        return current[key];
    }, obj)

    lastProperty[lastKey] = value;
    return obj;
}
