"use strict";

const zip = (...objects) =>
	objects.every((element) => typeof element === "object")
		? Object.assign({}, ...objects.reverse())
		: null;
