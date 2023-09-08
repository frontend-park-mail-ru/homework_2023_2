'use strict';

/*
    Напишите функцию `get`, которая получает путь к вложенному свойству объекта
    и возвращает значение этого свойства (или undefined, если свойства не существует)
*/

const get = (object, pathToProperty) => {
    if (pathToProperty === '.') {
        return object;
    }

    const propertyNames = pathToProperty.slice(1).split('.');

    return propertyNames.reduce((previous, propertyName) =>
        previous === undefined ? undefined : previous[propertyName], object);
};
