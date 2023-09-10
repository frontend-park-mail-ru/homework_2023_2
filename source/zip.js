'use strict';

const zip = (...objects) => {
    let resultObject = {}
    objects.map((object) => {
        if (!Array.isArray(object) && typeof object != 'string' && typeof object == 'object') {
            Object.entries(object).forEach(([key, value]) => {
                if (!resultObject.hasOwnProperty(key))
                    resultObject[key] = value
            })
        }
    })
    return resultObject
}
