/**
 * Функция возвращает инвертированный массив, если он без дополнительного параметра.
 * Если передать положительный параметр n вместе с массивом, 
 * он инвертирует массив с n-го элемента, с отрицательным -до |n|-го элемента.
 * @param {Array} array инвертируемый массив
 * @param {number} index индекс, от(до) которого идет инверсия
 * @returns {array} возвращаемый массив
 */
const inverse = (array, index = 0) => {
    if (!Array.isArray(array)) {
        throw new TypeError('Parameter is not an array!');
    } 
    if (typeof index !== "number") {
        throw new TypeError('Parameter is not a number!');
    }   
    const leftSubarray = array.slice(0, index);
    const rightSubarray = array.slice(index);
    (index >= 0 ? rightSubarray : leftSubarray).reverse();
    return leftSubarray.concat(rightSubarray);
};
