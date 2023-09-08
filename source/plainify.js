'use strict';

/**
 * The function of adding a prefix to the properties of an object.
 * @param {Object} obj - Source object.
 * @param {string} prefix - Prefix to add to object properties.
 */
const rec_build = (obj, prefix) => {
    return Object.entries(obj).reduce((res_obj, [key, val]) => {
        return {...res_obj, ...(val instanceof Object ? rec_build(val, prefix + key + '.') : {[prefix + key]: val})}
    }, {});
}


/**
 * Converting an object to plain.
 * @param {Object} object - Source object.
 */
const plainify = object => {
    if (!(object instanceof Object)) {
        throw new TypeError('expected Object');
    }
    return rec_build(object, '');
}
