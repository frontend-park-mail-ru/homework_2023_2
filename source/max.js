'use strict';

const max = numbers => Math.max(...numbers);

const tree = function(height){
        if (height < 3) return null;
          
        let result = '';
        for (let i = 1; i < height; i++) {
            let tmp = ''.padStart(height - i-1, ' ').padEnd(height - 2 + i, '*').padEnd((height-1) * 2 - 1, ' ');
            result += tmp + '\n';
        }
        result += ' '.repeat(height - 2) + '|' + ' '.repeat(height - 2) + '\n';
        return result;
        
    }