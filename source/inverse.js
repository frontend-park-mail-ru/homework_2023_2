'use strict';

const max = numbers => Math.max(...numbers);

const inverse = function () {
    let numbers = arguments[0];
    if (numbers.includes(undefined)){
        return []
    }
    if (arguments[1]) {
        let ind = arguments[1];
        if (arguments[1] >= 0){
	        let reversedSubarray = numbers.slice(ind).reverse();
            return numbers.slice(0, ind).concat(reversedSubarray);
        } else {
            ind = Math.abs(ind);
            let subarray = numbers.splice(numbers.length - ind, ind)
            let result = numbers.reverse().concat(subarray);
            return result;
        }
    }
    else {
        return arguments[0].reverse();
    }
};