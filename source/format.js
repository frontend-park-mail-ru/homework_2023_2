'use strict';

const format = (numbers, columns) => {
    if(Array.isArray(numbers) === false){
        throw new TypeError(`A ${typeof(numbers)} was passed as input instead of array of numbers`)
    }
    if(typeof(columns) !== "number"){
        throw new TypeError(`A ${typeof(columns)} was passed as input instead of number of columns`)
    }
    if(columns <= 0){
        return ''
    }
    const maxNumInColumns = new Array(columns).fill(0)
    let result = '';
    numbers.forEach((item, i, numbers) => {
        if(typeof(item) !== "number"){
            throw new TypeError(`An array of ${typeof(item)}s was passed as input instead of array of numbers`)
        }
        if(String(item).length > maxNumInColumns[i % columns]){
            maxNumInColumns[i % columns] = String(item).length;
        }
    });
    numbers.forEach((item, i, numbers) => {
        result += ' '.repeat(maxNumInColumns[i % columns] - String(item).length) + item;
        result += (i + 1) % columns === 0 ? '\n' : ' ';
    });
    return result.slice(0, -1);
};
