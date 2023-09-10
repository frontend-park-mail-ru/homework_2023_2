'use strict';

const format = (numbers, columns) => {
    if(Array.isArray(numbers)===false){
        throw new TypeError(`A ${typeof(numbers)} was passed as input instead of array of numbers`)
    }
    if(typeof(columns)!=="number"){
        throw new TypeError(`A ${typeof(columns)} was passed as input instead of number of columns`)
    }
    if(columns<=0){
        return ''
    }
    let maxNumInColumns = [];
    maxNumInColumns.length=columns;
    maxNumInColumns.fill(0);
    let result = '';
    numbers.forEach(function(item, i, numbers) {
        if(typeof(item)!=="number"){
            throw new TypeError(`An array of ${typeof(item)}s was passed as input instead of array of numbers`)
        }
        if(String(item).length>maxNumInColumns[i%columns]){
            maxNumInColumns[i%columns] = String(item).length;
        }
    });
    numbers.forEach(function(item, i, numbers) {
        result+=' '.repeat(maxNumInColumns[i%columns]-String(item).length)+item;
        if((i+1)%columns===0){
            result+='\n';
        }else{
            result+=' ';
        }
    });
    return result.slice(0, -1);
};
