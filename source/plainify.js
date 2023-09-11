'use strict';

/**
 * Generate the function comment for the given function body.
 *
 * @param {object} obj - The object to be converted to a plain version.
 * @throws {TypeError} If the object is not plainable.
 * @return {object} The resulting object with flattened keys.
 */
const plainify = (obj) => {
    if (!isPlainable(obj)) {
        throw new TypeError;
    }

    return plainifyWithPrefix(obj, '');
}

/**
 * Recuresively generates a plain version of keys of the given object.
 *
 * @param {object} obj - The object to be flattened.
 * @param {string} prefix - The prefix to be added to the keys.
 * @return {object} - The resulting object with flattened keys.
 */
const plainifyWithPrefix = (obj, prefix) => {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        return {...acc, ...(isPlainable(v) ? plainifyWithPrefix(v, `${prefix}${k}.`) : { [`${prefix}${k}`]: v })};
    }, {})
}

/**
 * Returns whether the given object is plainable.
 * Plainable objects are array, instances of Object.
 * Null is not considered as plainable.
 * 
 * @param {object} obj 
 * @returns {boolean}
 */
const isPlainable = (obj) => { 
    return (typeof obj === 'object' && obj !== null && 
            (obj.constructor === Object || obj.constructor === Array));
}
