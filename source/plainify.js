'use strict';

const plainify = object => {
    let res = {};
    const rec_build = (obj, prefix) => {
        for (let prop in obj) {
            if (obj[prop] instanceof Object) {
                rec_build(obj[prop], prefix + prop + '.');
            } else {
                res[prefix + prop] = obj[prop];
            }
        }
    }
    rec_build(object, '');
    return res;
}
