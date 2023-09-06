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
    const keys = path.split('.');
    let current = obj;

    for (let i = 1; i < keys.length - 1; i++) {
        let key = keys[i];

        if (!(key in current)) {
            current[key] = {};
        }

        current = current[key];
    }

    current[keys[keys.length - 1]] = value;
    return obj;
}
