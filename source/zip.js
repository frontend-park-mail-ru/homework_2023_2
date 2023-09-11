'use strict'

function zip(...objects) {

    let resObj = {};

    objects.forEach( object => {

        for (let key in object)
        {
            if (!(key in resObj))
                resObj[key] = object[key];
        }

    })

    return resObj;

}
