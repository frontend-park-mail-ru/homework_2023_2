'use strict';

function getImpl(object, properties) {
    if (properties.length == 0) {
        return object
    }

    if (object[properties[0]] != undefined) {
        return getImpl(object[properties[0]], properties.slice(1))
    }

    return undefined;
}
function get(object, query) {
    if (query == '.') {
        return object
    }

    const properties = query.slice(1).split('.');
    return getImpl(object, properties);
}