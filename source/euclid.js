"use strict";

const euclid = (...numbers) => {
	let nod = 0;
	numbers.forEach((num) => {
		while (num && nod) {
			num >= nod ? (num %= nod) : (nod %= num);
		}
		nod = num || nod;
	});
	return nod;
};
