'use strict';
/**
 * Returns new object with all the properties of all the given objects.
 * If one property is in multiple objects selects the erliest one.
 * If one of given arguments is not an object - returns null
 * Throws an exception if given no arguments
 *
 * @throws {Error} Argument objects should not be empty
 * @param  {...object} objects - Given objects
 * @returns {object} - New object with all the properties or null.
 */
const zip = (...objects) => {
	if (objects.length == 0) {
		throw new Error('No parametres were entered');
	}
	return objects.every(
		(element) =>
			typeof element === 'object' &&
			Object.getPrototypeOf(element) === Object.prototype
	)
		? Object.assign({}, ...objects.reverse())
		: null;
};
