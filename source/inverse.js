/**
 * Функция возвращает инвертированный массив, если он без дополнительного параметра.
 * Если передать положительный параметр n вместе с массивом, 
 * он инвертирует массив с n-го элемента, с отрицательным -до |n|-го элемента.
 * @param {array} array инвертируемый массив
 * @param {number} index индекс, от(до) которого идет инверсия
 * @returns {array} возвращаемый массив
 */
const inverse = (numbers, index = 0) => {
    if (!Array.isArray(numbers)) {
        throw new TypeError('Parameter is not an array!');
    } 
    if (typeof index !== "number") {
        throw new TypeError('Parameter is not a number!');
    }   
    const leftSubarray = numbers.slice(0, index)
    const rightSubarray = numbers.slice(index)
    const reversedSubarray = (index >= 0 ? rightSubarray : leftSubarray).reverse();
    return leftSubarray.concat(rightSubarray);
};
