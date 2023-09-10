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
            let len = numbers.length;
            let subarray1 = numbers.slice(len - ind, len);
            let subarray2 = numbers.slice(0, len - ind);
            return subarray2.reverse().concat(subarray1);
        }
    }
    else {
        return numbers.reverse();;
    }
};


