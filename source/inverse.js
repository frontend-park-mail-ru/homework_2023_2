/**
 * Инвертирует порядок элементов в массиве на основе указанного индекса. 
 * @param {Array} arr - Массив, который нужно инвертировать.
 * @param {number} [num=0] - Индекс, с которого начинается инверсия. По умолчанию 0.
 * @returns {Array} - Инвертированный массив.
 * @throws {Error} - Если первый аргумент не является массивом или второй аргумент не является числом.
 */

const inverse = (arr, num = 0) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Первый аргумент должен быть массивом');
    }
      
    if (typeof num !== 'number' && !(num instanceof Number)) {
        throw new TypeError('Второй аргумент должен быть числом');
    }      

    if (num >= 0) {
        const reversed = [];
        for (let i = num; i < arr.length; i++) {
            reversed.unshift(arr[i]);
        }
        return [...arr.slice(0, num), ...reversed];
    } else {
        const reversed = [];
        for (let i = 0; i < arr.length + num; i++) {
            reversed.unshift(arr[i]);
        }
        return [...reversed, ...arr.slice(num)];
    }
}
