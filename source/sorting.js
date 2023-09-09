'use strict';

/**
 * Устойчивая сортировка массива plain-объектов в порядке воззрастания по элементам массива имён свойств
 * @param {Array.<Object>} objects - массив plain-объектов
 * @param {Array.<string>} keys - массив имён свойств
 * @returns {Array.<Object>} - отсортированный массив
 */
const sorting = function (objects, keys) {
    return objects.sort((a, b) => {
        for (let key of keys) {
            const propertyA = a[key];
            const propertyB = b[key];
            if (typeof propertyA === 'string') {
                const compare = propertyA.localeCompare(propertyB);
                if (compare !== 0) {
                    return compare;
                }
            }
            if (typeof propertyA === 'number') {
                if (propertyA !== propertyB) {
                    return propertyA - propertyB;
                }
            }
        }
        return 0;
    });
}
