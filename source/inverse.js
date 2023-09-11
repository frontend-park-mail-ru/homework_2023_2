/**
 * Функция возвращает инвертированный массив, если он без дополнительного параметра.
 * Если передать положительный параметр n вместе с массивом, 
 * он инвертирует массив с n-го элемента, с отрицательным -до |n|-го элемента.
 * @param {array} array инвертируемый массив
 * @param {number} index индекс, от(до) которого идет инверсия
 * @returns {array} возвращаемый массив
 */
const inverse = (array, index = 0) => {
    if (!Array.isArray(array)) {
        throw new Error('Parameter is not an array!');
    } 
    if (typeof index !== "number") {
        throw new TypeError('Parameter is not a number!');
    }   
    const numbers = array.slice();
    const subarray1 = numbers.slice(index)
    const subarray2 = numbers.slice(0, index)
    index >= 0 ? subarray1.reverse() : subarray2.reverse();
    return subarray2.concat(subarray1);
};
