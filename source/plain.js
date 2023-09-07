'use strict';

const plain = function (array) {
    if (!(array instanceof Array)) {
        return array;
    }

    let res = [];

    for (let elm of array) {
        if (elm instanceof Array) {
            res.push(...plain(elm));
        } else {
            res.push(elm);
        }
    }

    return res;
};
