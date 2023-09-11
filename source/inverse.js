/**
 * 
 * @param {array} array инвертируемый массив
 * @param {number} index индекс, от(до) которого идет инверсия
 * @returns {array} возвращаемый массив
 */

const inverse = (array, index) => {

    if (!Array.isArray(array)) {
        return "Передан не массив";
    } 
	const numbers = array.slice();
	if (!index) {
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
