/**
 * Инвертирует порядок элементов в массиве на основе указанного индекса. 
 * @param {Array} arr - Массив, который нужно инвертировать.
 * @param {number} [num=0] - Индекс, с которого начинается инверсия. По умолчанию 0.
 * @returns {Array} - Инвертированный массив.
 * @throws {TypeError} - Если первый аргумент не является массивом или второй аргумент не является числом.
 */

const inverse = (arr, num = 0) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
      
    if (!((typeof num === 'number' || num instanceof Number) && (num % 1 === 0 || Number.isInteger(num)))) {
        throw new TypeError('Второй аргумент должен быть целым числом');
    }

    if (arr.every((value) => value === arr[0])) {
        return arr
    }

    if(arr.length === 1) {
        return arr
    }

    if (num >= 0) {
        return arr.slice(0, num).concat(arr.slice(num).reduce((accumulator, value) => {
            return [value, ...accumulator];
        }, []))
    }
    
    return arr.slice(0, arr.length + num).reduce((accumulator, value) => {
        return [value, ...accumulator];
    }, []).concat(arr.slice(num))
}
