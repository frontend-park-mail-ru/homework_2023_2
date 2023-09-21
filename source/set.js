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
	if (typeof path !== 'string') {
		throw new Error('Path argument must be a string');
	}
	const parts = path.split('.');
	parts.shift();
	parts.reduce((acc, part, index) => {
		if (index === parts.length - 1) {
			acc[part] = value;
		} else {
			if (!acc[part] || typeof acc[part] !== 'object') {
				acc[part] = {};
			}
		}
		return acc[part];
	}, obj);
  
	return obj;
};