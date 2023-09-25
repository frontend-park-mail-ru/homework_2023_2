'use strict';


/**
 * Sets a value in an object at the specified path.
 * If the path does not exist, it creates the necessary nested objects.
 *
 * @param {Object} obj - The object to set the value in.
 * @param {string} path - The path to set the value at.
 * @param {*} value - The value to set.
 * @returns {Object} - The modified object.
 * @throws {TypeError} - If the path argument is not a string.
 * @throws {TypeError} - If the obj argument is not a valid object.
 * @throws {TypeError} - If the value argument is a function, symbol, or undefined.
 */
const set = (obj, path, value) => {
  if (path instanceof String) {
	path = path.valueOf()
  }
  if (typeof path !== 'string') {
    throw new TypeError('Path argument must be a string');
  }
  if (typeof obj !== 'object' || obj === null || [String, Number].some(type => obj instanceof type)) {
    throw new TypeError('obj argument must be a valid object');
  }
  if (['function', 'symbol', 'undefined'].includes(typeof value)) {
    throw new TypeError('value argument cannot be function, symbol, or undefined');
  }
  const parts = path.split('.');
  parts.shift();
  parts.reduce((acc, part, index) => {
    if (index === parts.length - 1) {
      acc[part] = value;
    } else if (!acc[part] || typeof acc[part] !== 'object') {
      acc[part] = {};
    }
    return acc[part];
  }, obj);

  return obj;
};
