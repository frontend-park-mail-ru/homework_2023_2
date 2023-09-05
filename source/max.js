'use strict';

const max = numbers => Math.max(...numbers);

const tree = function(height){
        if (height < 3) return null;
          
        let result = '';
        for (let i = 1; i < Number(height); i++) {
            let tmp = ''.padStart(Number(height) - i-1, ' ').padEnd(Number(height) + i - 2, '*').padEnd((Number(height)-1) * 2 - 1, ' ');
            result += tmp + '\n';
        }
        result += ' '.repeat(Number(height) - 2) + '|' + ' '.repeat(Number(height) - 2) + '\n';
        return result;
        
    }