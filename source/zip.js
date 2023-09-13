'use strict'

let zip = (...objects) => {

    if (objects.length == 0) {
        return {};  
    }

    for (let object of objects) {
        if (typeof object != 'object') {
            throw new Error('Были переданы данные, содержащие не только объекты');
        }
    }

    let resObj = objects.reduce((props, object) => {
        
        for (let key of Object.keys(object)) {
            if (!(props.hasOwnProperty(key)))
                props[key] = object[key];
        }

        return props;
    
    }, {});

    return resObj;

}
