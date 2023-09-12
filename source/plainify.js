'use strict';

/**
 * The function of adding a prefix to the properties of an object.
 * @param {Object} obj - Source object.
 * @param {string} prefix - Prefix to add to object properties.
 * @returns {Object} The plain object whose properties all have the specified prefix.
 */
const recBuild = (obj, prefix) => {
    return Object.entries(obj).reduce((resObj, [key, val]) => {
        return {...resObj, ...(Object.prototype.toString.call(val) === '[object Object]' ||
            Object.prototype.toString.call(val) === '[object Array]' ?
            recBuild(val, prefix + key + '.') : {[prefix + key]: val})}
    }, {});
}


/**
 * Converting an object to plain.
 * @param {Object} object - Source object.
 * @returns {Object} The plain object.
 * @throws {TypeError} The passed parameter must be an object.
 */
const plainify = object => {
    if (Object.prototype.toString.call(object) !== '[object Object]') {
        throw new TypeError('expected Object');
    }
    return recBuild(object, '');
}
