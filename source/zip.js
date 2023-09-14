'use strict';

const zip = (...objects) => {
    objects.map((object) => {
        if (
            Array.isArray(object) 
            || typeof object !== 'object' 
            || object === null 
            || object instanceof String 
            || object instanceof Number
        ) {
            throw new TypeError('TYPE ERROR IN ARGUMENTS')
        }
    })
    const resultObject = {}
    objects.map((object) => {
        Object.entries(object).forEach(([key, value]) => {
            if (!resultObject.hasOwnProperty(key)) {
                resultObject[key] = value
            }
        })
    })
    return resultObject
}
