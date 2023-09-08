'use strict';

/**
 * @description Exposes the properties of the object to create the plain version
 * @param {object} object The object to create the plain version
 * @param {string} [prefix=''] (Optional) The prefix for the name of the keys
 * @return {object} Resulting object in a plain form
 */
const buildPlainObject = (object, prefix='') => {
    return Object.entries(object).reduce((object, [key, value]) => {
        return {...object, ...(value instanceof Object ? buildPlainObject(value, `${prefix}${key}.`) : {[`${prefix}${key}`]: value})}
    }, {});
}

/**
 * @description Returns the plain version of the passed object
 * @param {Object} object The object to transform
 * @return {Object} Resulting plain object
 */
const plainify = (object) => {
    if (!(object instanceof Object)) return TypeError;
    return buildPlainObject(object);
}