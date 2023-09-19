'use strict';
/**
 * Инвертирует порядок элементов в массиве на основе указанного индекса. 
 * @param {Array} arr - Массив, который нужно инвертировать.
 * @param {number} [num=0] - Индекс, с которого начинается инверсия. По умолчанию 0.
 * @returns {Array} - Инвертированный массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй аргумент не является числом.
 */
const inverse = (arr, reverseIndex = 0) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
      
    if (!(typeof reverseIndex === 'number' && Number.isInteger(reverseIndex))) {
        throw new TypeError('Второй аргумент должен быть целым числом');
    }

    if (arr.every((value) => value === arr[0])) {
        return arr;
    }

    if (reverseIndex >= 0) {
        const reversed = arr.slice(reverseIndex).reduce((acc, number) =>  ([number, ...acc]), []);
        return arr.slice(0, reverseIndex).concat(reversed);
    }

    const reversed = arr.slice(0, arr.length + reverseIndex).reduce((acc, number) => ([number, ...acc]), []);
    return reversed.concat(arr.slice(reverseIndex));
}
