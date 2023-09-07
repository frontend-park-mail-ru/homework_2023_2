'use strict';

const format = function (numbers, columns) {
    if(columns<0){
        return ''
    }
    let maxNumInColumns = [];
    maxNumInColumns.length=columns;
    maxNumInColumns.fill(0);
    let result = '';
    for(let i = 0; i<numbers.length; i++){
        if(String(numbers[i]).length>maxNumInColumns[i%columns]){
            maxNumInColumns[i%columns] = String(numbers[i]).length;
        }
    }
    for(let i = 0; i<numbers.length; i++){
        result+=' '.repeat(maxNumInColumns[i%columns]-String(numbers[i]).length)+numbers[i];
        if((i+1)%columns==0){
            result+='\n';
        }else{
            result+=' ';
        }
    }
    return result.slice(0, -1);
};