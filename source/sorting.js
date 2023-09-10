'use strict';

/**
 * Устойчивая сортировка массива plain-объектов в порядке воззрастания по элементам массива имён свойств
 * @param {Array.<Object>} objects - массив plain-объектов
 * @param {Array.<string>} keys - массив имён свойств
 * @returns {Array.<Object>} - отсортированный массив
 */
const sorting = (objects, keys) => {
    const sortedObjects = objects.slice(); 
    
    return sortedObjects.sort((a, b) => {
        for (let key of keys) {
            if (!sortedObjects.some((object) => object.hasOwnProperty(key))) {
                return 0;
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
                default:
                    break;
            }
        }
        return 0;
    });
}
