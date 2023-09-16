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

    if (objects.length === 0)
        return {};

    objects.forEach(object => {

        if (object === null) {
            throw new TypeError("Expected 'object' but got 'null'")
        }

        if (typeof object !== 'object') {
            throw new TypeError (`Expected 'object' but got '${typeof object}'`)
        }

    })

    if (objects.length === 1) {
        return objects[0];
    }
    
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
