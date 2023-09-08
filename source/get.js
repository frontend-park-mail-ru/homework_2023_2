'use strict';

/*
    Напишите функцию `get`, которая получает путь к вложенному свойству объекта
    и возвращает значение этого свойства (или undefined, если свойства не существует)
*/

let get = (object, pathToProperty) => {
    if (pathToProperty === '.') {
        return object;
    }

    let propertyNames = pathToProperty.slice(1).split('.');
    let propertyValue = propertyNames.reduce(function(previous, propertyName) {
        if (previous === undefined) return undefined;
        return previous[propertyName];
    }, object);

    return propertyValue;
};
