'use strict';

const plainify = (obj) => {
    if (!isObj(obj)) return obj;
    
    return plainifyWithPrefix(obj, '');
}

const plainifyWithPrefix = (obj, prefix) => {
    let result = {};
    for (const [k, v] of Object.entries(obj)) {
        result = {...result, ...(isObj(v) ? plainifyWithPrefix(v, `${prefix}${k}.`) : { [`${prefix}${k}`]: v })};
    }
    return result;
}

const isObj = (obj) => { return typeof obj === 'object' && obj !== null && !Array.isArray(obj)}
