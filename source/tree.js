'use strict';

/**
 * function create a tree 
 * @param  {Number} arg contain height of the tree
 * @returns {String} tree
 * @throws Will throw an error if the value of height is invalid
 */

const tree = height => {
    if (isNaN(height) || height === Infinity || height === "") {
        throw new Error("Error: invalid value of height");
    }

    if (height < 3) {
        return null;
    }

    const baseOfTree = 2 * height - 3;
    let result = " ".repeat((baseOfTree - 1) / 2) + "|" + " ".repeat((baseOfTree - 1) / 2) + "\n";

    for(let padding = 0; padding < height - 1; ++padding) {
        result = " ".repeat(padding) + "*".repeat(baseOfTree - 2 * padding) + " ".repeat(padding) + "\n" + result;
    }
    
    return result;
};
