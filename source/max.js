'use strict';

const maxLame = function (numbers) {
    let max_num = numbers[0];
	numbers.forEach(num => {
        if (num > max_num) {
            max_num = num
        }
    });
    return max_num;
};


const max = function (numbers) {
    return Math.max.apply(null, numbers);
};
