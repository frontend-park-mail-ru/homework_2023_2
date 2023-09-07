'use strict';

const rec_build = (obj, prefix) => {
    return Object.entries(obj).reduce((res_obj, [key, val]) => {
        return {...res_obj, ...(val instanceof Object ? rec_build(val, prefix + key + '.') : {[prefix + key]: val})}
    }, {});
}

const plainify = object => {
    if (!(object instanceof Object)) {
        throw new TypeError('expected Object');
    }
    return rec_build(object, '');
}
