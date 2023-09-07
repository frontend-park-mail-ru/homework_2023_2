'use strict';

/**
 * Устойчивая сортировка массива plain-объектов в порядке воззрастания по элементам массива имён свойств
 * @param objects - массив plain-объектов
 * @param keys - массив имён свойств
 * @returns {array} - отсортированный массив
 */
const sorting = function (objects, keys) {
    return objects.sort((a, b) => {
        for (let key of keys) {
            let propertyA = a[key];
            let propertyB = b[key];
            if (typeof propertyA == "string") {
                let compare = propertyA.localeCompare(propertyB);
                if (compare !== 0) {
                    return compare;
                }
            }
            if (typeof propertyA == "number" && keys.includes(key)) {
                if (propertyA !== propertyB) {
                    return propertyA - propertyB;
                }
            }
        }
        return 0;
    });
}
