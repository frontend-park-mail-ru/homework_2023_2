/**
 * Инвертирует порядок элементов в массиве на основе указанного индекса. 
 * @param {Array} arr - Массив, который нужно инвертировать.
 * @param {number} [num=0] - Индекс, с которого начинается инверсия. По умолчанию 0.
 * @returns {Array} - Инвертированный массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй аргумент не является числом.
 */

const inverse = (arrNums, num = 0) => {
    if (!Array.isArray(arrNums)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
      
    if (!((typeof num === 'number' || num instanceof Number) && Number.isInteger(num))) {
        throw new TypeError('Второй аргумент должен быть целым числом');
    }

    if (arrNums.every((value) => value === arrNums[0])) {
        return arrNums;
    }

    if (num >= 0) {
        const newArrNums = arrNums.slice(0, num).concat(arrNums.slice(num).reduce((accumulator, value) => {
            return [value, ...accumulator];
        }, []));
        return newArrNums
    }

    const newArrNums = arrNums.slice(0, arrNums.length + num).reduce((accumulator, value) => {
        return [value, ...accumulator];
    }, []).concat(arrNums.slice(num))
    return newArrNums
}
