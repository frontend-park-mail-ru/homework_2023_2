'use strict'

/**
 * Функция get
 * @param {Object} object исходный объект со свойствами
 * @param {string} pathToProperty абсолютный путь до свойства
 * @returns {any} 
 * @throws Неверный тип object, Неверный тип pathToProperty
 */
const get = (object, pathToProperty) => {
    if (typeof object !== 'object')
        throw new Error("Неверный тип object")
    
    if (typeof pathToProperty !== 'string')
        throw new Error("Неверный тип pathToProperty")
    
    if (pathToProperty === '')
        return undefined;

    if (pathToProperty === '.')
        return object;
    
    let splitedPathToProperty = pathToProperty.split('.').slice(1);
    let newObject = structuredClone(object);

    splitedPathToProperty.map((property) => {
        if (newObject == undefined)
            return undefined
        
            newObject = newObject[property];
    })

    return newObject;
}
