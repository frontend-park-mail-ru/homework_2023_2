'use strict';

/** 
 * Форматирует переданные целые числа в несколько колонок
 * Числа в получившейся таблице идут слева направо, сверху вниз
 * @param {array} numbers числа которые нужно отформатировать
 * @param {number} columns количество столбцов в итоговой таблице
 * @returns {string} Строка с отформатированными числами
 * @throws {TypeError} Если входные данные не тех типов
*/
const format = (numbers, columns) => {
    if(!Array.isArray(numbers)){
        throw new TypeError(`A ${typeof(numbers)} was passed as input instead of array of numbers`);
    }

    if(typeof(columns) !== 'number'){
        throw new TypeError(`A ${typeof(columns)} was passed as input instead of number of columns`);
    }

    if(columns <= 0){
        return '';
    }
    
    const maxNumInColumns = new Array(columns).fill(0);
    let result = '';
    numbers.forEach((number, i, numbers) => {
        if(typeof(number) !== 'number'){
            throw new TypeError(`An array of ${typeof(number)}s was passed as input instead of array of numbers`);
        }
        if(String(number).length > maxNumInColumns[i % columns]){
            maxNumInColumns[i % columns] = String(number).length;
        }
    });
    numbers.forEach((number, i, numbers) => {
        result += ' '.repeat(maxNumInColumns[i % columns] - String(number).length) + number;
        result += (i + 1) % columns === 0 ? '\n' : ' ';
    });
    return result.slice(0, -1);
};
