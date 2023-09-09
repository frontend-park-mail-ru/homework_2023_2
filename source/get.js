'use strict';

/*
    Напишите функцию `get`, которая получает путь к вложенному свойству объекта
    и возвращает значение этого свойства (или undefined, если свойства не существует)
*/

const PATH_START_INDEX = 1;

/**
 * Get property value of given object.
 * @param {Object} object - Object to get property value from.
 * @param {String} pathToProperty - Sequence of property names, each beginning with a dot.
 * @returns {Object|undefined} - Property value or undefined if property does not exist.
 * @throws {TypeError} - Arguments must be of type Object and String.
*/
const get = (object, pathToProperty) => {
    if (typeof object !== 'object' || typeof pathToProperty !== 'string') {
        throw new TypeError("Invalid argument type");
    }

    if (pathToProperty === '.') {
        return object;
    }

    const propertyNames = pathToProperty.slice(PATH_START_INDEX).split('.');

    return propertyNames.reduce((previous, propertyName) =>
        previous === undefined ? undefined : previous[propertyName], object);
};
