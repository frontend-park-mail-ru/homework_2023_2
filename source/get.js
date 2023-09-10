'use strict';

/*
    Напишите функцию `get`, которая получает путь к вложенному свойству объекта
    и возвращает значение этого свойства (или undefined, если свойства не существует)
*/

/**
 * Get property value of given object.
 * @param {Object} object - Object to get property value from.
 * @param {String} pathToProperty - Sequence of property names, each beginning with a dot.
 * @returns {Object|undefined} - Property value or undefined if property does not exist.
 * @throws {TypeError} - Arguments must be of type Object and String.
*/
const get = (object, pathToProperty, needProto = false) => {
    if (typeof object !== 'object' || typeof pathToProperty !== 'string' || !object || !pathToProperty) {
        throw new TypeError("Invalid argument type");
    }

    if (pathToProperty === '.') {
        return object;
    }

    const PATH_START_INDEX = 1;
    const propertyNames = pathToProperty.slice(PATH_START_INDEX).split('.');

    return propertyNames.reduce((previous, propertyName) =>
        previous && (previous.hasOwnProperty(propertyName) || needProto) ? previous[propertyName] : undefined, object);
};
