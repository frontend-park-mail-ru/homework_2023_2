'use strict';

/**
 * Устойчивая сортировка массива plain-объектов в порядке воззрастания по элементам массива имён свойств
 * @param {Array.<Object>} objects - массив plain-объектов
 * @param {Array.<string>} keys - массив имён свойств
 * @returns {Array.<Object>} - отсортированный массив
 * @throws {InvalidArgumentException} Выкидывает исключение, если передано несуществующее имя свойства объекта
 */
const sorting = (objects, keys) => {
    return [...objects].sort((a, b) => {
        for (const key of keys) {
            if (!objects.some((object) => object.hasOwnProperty(key))) {
                throw new Error('A non-existent object name was passed');
            }

            const propertyA = a[key];
            const propertyB = b[key];

            if (propertyA === propertyB) {
                continue;
            }

            switch (typeof propertyA) {
                case 'string':
                    return propertyA.localeCompare(propertyB);
                case 'number':
                    return propertyA - propertyB;
                case "object":
                    if (propertyA instanceof String) {
                        return propertyA.localeCompare(propertyB);
                    }
                    if (propertyA instanceof Number) {
                        return propertyA - propertyB;
                    }
                    break;
                default:
                    break;
            }
        }
        return 0;
    });
}
