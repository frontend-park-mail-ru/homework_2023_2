'use strict';

/**
 * @description Exposes the properties of the object to create the plain version
 * @param {Object} object The object to create the plain version
 * @param {String} [prefix=''] (Optional) The prefix for the name of the keys
 * @return {Object} Resulting object in a plain form
 */
const buildPlainObject = (object, prefix='') => (
    Object.entries(object).reduce((object, [key, value]) => ({
        ...object, ...(Object.prototype.toString.call(value) === '[object Object]' ||
        Object.prototype.toString.call(value) === '[object Array]' ? buildPlainObject(value, `${prefix}${key}.`) : {[`${prefix}${key}`]: value})
    }), {})
)

/**
 * @description Returns the plain version of the passed object
 * @param {Object} object The object to transform
 * @return {Object} Resulting plain object
 * @throws {TypeError} When the parameter is not an object
 */
const plainify = (object) => {
    if (Object.prototype.toString.call(object) === '[object Object]') {
        return buildPlainObject(object);
    }
    throw new TypeError("Object expected");
}
