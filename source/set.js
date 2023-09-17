'use strict';


/**
 * Sets a value in an object at the specified path.
 * If the path does not exist, it creates the necessary nested objects.
 *
 * @param {Object} obj - The object to set the value in.
 * @param {string} path - The path to set the value at.
 * @param {*} value - The value to set.
 * @returns {Object} - The modified object.
 */
const set = (obj, path, value) => {
  const parts = path.split('.');
  let current_object = obj;
  
  for (let i = 1; i < parts.length - 1; ++i) {
    current_object = current_object[parts[i]] ??= {};
  }
  
  current_object[parts[parts.length - 1]] = value;
  return obj;
};
