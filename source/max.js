'use strict';

const max = function (numbers) {
    var max_num = numbers[0];
	numbers.forEach(num => {
        if (num > max_num) {
            max_num = num
        }
    });
    return max_num;
};
