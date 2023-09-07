'use strict';

const zip = (...objects) => {
    let resultObject = {}
    objects.map((object) => {
        Object.entries(object).forEach(([key, value]) => {
            if (!resultObject.hasOwnProperty(key))
                resultObject[key] = value
        })
    })
    return resultObject
}
