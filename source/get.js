'use strict';

/*
    Напишите функцию `get`, которая получает путь к вложенному свойству объекта
    и возвращает значение этого свойства (или undefined, если свойства не существует)
*/

const PATH_START_INDEX = 1;

const get = (object, pathToProperty) => {
    if (pathToProperty === '.') {
        return object;
    }

    const propertyNames = pathToProperty.slice(PATH_START_INDEX).split('.');

    return propertyNames.reduce((previous, propertyName) =>
        previous === undefined ? undefined : previous[propertyName], object);
};
