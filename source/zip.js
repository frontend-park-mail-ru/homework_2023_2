'use strict';
/**
 * Returns new object with all the properties of all the input objects.
 * If one property is in multiple objects selects the erliest one.
 * If one of input parametres is not an object - returns null
 *
 * @param  {...object} objects - Input objects
 * @returns {object} - New object with all the properties or null.
 */
const zip = (...objects) => {
	if (objects.length == 0) {
		throw new Error('No parametres were entered');
	}
	return objects.every((element) => typeof element === 'object')
		? Object.assign({}, ...objects.reverse())
		: null;
};
