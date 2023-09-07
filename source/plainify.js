'use strict';

/**
 * Returns a plain version of keys of the given object.
 *
 * @param {Object} obj - The object to be converted to a plain version.
 * @return {Object} The resulting object with flattened keys.
 */
const plainify = (obj) => {
    if (!isObj(obj)) return TypeError;
    
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
        return {...acc, ...(isObj(v) ? plainifyWithPrefix(v, `${prefix}${k}.`) : { [`${prefix}${k}`]: v })};
    }, {})
}


const isObj = (obj) => { return typeof obj === 'object' && obj !== null }
