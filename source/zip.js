"use strict";

const zip = (...objects) => {
	if (objects.every((element) => typeof element === "object")) {
		return Object.assign({}, ...objects.reverse());
	} else {
		return null;
	}
};
