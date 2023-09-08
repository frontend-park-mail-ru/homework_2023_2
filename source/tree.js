'use strict';

/**
 * function create a tree 
 * @param  {Number} arg contain height of the tree
 * @returns {String} tree
 * @throws Will throw an error if the type of height is wrong
 */

const tree = height => {
    if (typeof height != "number" && !(typeof height == "string" && !isNaN(height))) {
        throw new Error('Error: incorrect type of height');
    }

    if (height < 3) {
        return null;
    }

    let result = " ".repeat(height - 2) + "|" + " ".repeat(height - 2) + "\n";

    for(let i = 0; i < height - 1; ++i) {
        result = " ".repeat(i) + "*".repeat(2 * height - 3 - 2 * i) + " ".repeat(i) + "\n" + result;
    }
    
    return result;
};
