/**
 * Функция возвращает инвертированный массив, если он без дополнительного параметра.
 * Если передать положительный параметр n вместе с массивом, 
 * он инвертирует массив с n-го элемента, с отрицательным -до |n|-го элемента.
 * @param {array} array инвертируемый массив
 * @param {number} index индекс, от(до) которого идет инверсия
 * @returns {array} возвращаемый массив
 */
const inverse = (array, index) => {

    if (!Array.isArray(array)) {
        return "Передан не массив";
    } 
	const numbers = array.slice();
	if (typeof(index) === "undefined") {
		return numbers.reverse();
	}
    if (typeof index !== "number") {
        return "Индекс должен быть числом";
    }   
	const subarray1 = numbers.slice(index)
	const subarray2 = numbers.slice(0, index)
	if (index >= 0){
		subarray1.reverse();
	} else {
		subarray2.reverse();
	}
	return subarray2.concat(subarray1);
};
