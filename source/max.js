'use strict';

const max = numbers => Math.max(...numbers);

const inverse = (array, ind) => {
let numbers = array.slice();
    if (ind) {
        if (ind >= 0){
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
        return numbers.reverse();;
    }
};
