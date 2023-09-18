/**
 * Инвертирует порядок элементов в массиве на основе указанного индекса. 
 * @param {Array} arr - Массив, который нужно инвертировать.
 * @param {number} [num=0] - Индекс, с которого начинается инверсия. По умолчанию 0.
 * @returns {Array} - Инвертированный массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй аргумент не является числом.
 */

const inverse = (arrNums, reverseIndex = 0) => {
    if (!Array.isArray(arrNums)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
      
    if (!(typeof reverseIndex === 'number' && Number.isInteger(reverseIndex))) {
        throw new TypeError('Второй аргумент должен быть целым числом');
    }

    if (arrNums.every((value) => value === arrNums[0])) {
        return arrNums;
    }

    if (reverseIndex >= 0) {
        const reversed = arrNums.slice(reverseIndex).reduce((acc, number) =>  ([number, ...acc]), []);
        return arrNums.slice(0, reverseIndex).concat(reversed);
    }

    const reversed = arrNums.slice(0, arrNums.length + reverseIndex).reduce((acc, number) => ([number, ...acc]), []);
    return reversed.concat(arrNums.slice(reverseIndex));
}
