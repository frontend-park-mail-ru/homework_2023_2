'use strict';

const zip = (...objects) => {
    let resultObject = {}
    objects.map((object) => {
        for (const [key, value] of Object.entries(object)) {
            if (!resultObject.hasOwnProperty(key))
                resultObject[key] = value
        }
    })
    return resultObject
}