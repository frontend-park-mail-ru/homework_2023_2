'use strict';

/** 
 * Функция, которая вовзращает объект, содержащий все свойства переданных ей объектов
 *  Если объекты не переданы, то возвращает пустой объект
 * 
 * @param {...Object} objects - Массив объектов
 * @throws {TypeError} - Если переданы данные, содержащие не только объекты
 * @returns {Object} - Объект, содержащий свойства всех переданных объектов  
 */
const zip = (...objects) => {


    if (objects.length < 2) {

        if (objects[0] === null || objects[0] instanceof Function) {
            throw new TypeError("Expected 'object' but got " + (objects[0] === null ? 'null' : 'function'));
        }
        
        return objects[0] || {};
    }

    objects.forEach(object => {
        if (object !== null && typeof object !== 'object') {
            throw new TypeError (`Expected 'object' but got ${typeof object}`)
        }
    })

    
    
    const resObj = objects.reduce((props, object) => {
        
        for (const key of Object.keys(object)) {
            
            if (!(props.hasOwnProperty(key))) {
                props[key] = object[key];
            }

        }

        return props;
    
    }, {});

    return resObj;

}
