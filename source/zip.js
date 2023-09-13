'use strict'

let zip = (...objects) => {

    for (let object of objects) {
        if (typeof object != 'object') {
            throw new Error('Были переданы данные, содержащие не только объекты');
        }
    }

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
