'use strict';


/**
 * 
 * @param {Object} object - передаваемый объект
 * @param {string} path - путь к полю
 * @param {any} value - устанавливаемое значение
 * @returns {Object} - исходный объект с установленным значением
 */
const set = (object, path, value) => {
    const keys = path.split('.').filter(key => key)
    let currentObject = structuredClone(object);
    let resultObject = currentObject;

    if (object === null || object === undefined || typeof object !== 'object' || typeof path !== 'string') {
        throw new Error('Некорректные входные данные');
    }
    
    if (keys.length === 1) {
        currentObject[keys[0]] = value;
        return currentObject;
    } else {
        keys.forEach((key,i) => { 
            

            if (i === keys.length - 1) {
                currentObject[key] = value;
            } else {
                if (!currentObject[key] || typeof currentObject[key] !== 'object') {
                    currentObject[key] = {};
                }
                currentObject = currentObject[key];
            }})
           
        
    }

    return resultObject;
};