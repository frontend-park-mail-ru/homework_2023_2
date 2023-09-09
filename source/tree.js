'use strict';

/**
 * function create a tree 
 * @param  {(Number|String)} arg contain height of the tree
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

    const trunk = 1; //высота ствола
    const baseOfTree = 2 * (height - trunk) - 1; //кол-во звездочек на нижнем уровне елки, так как на n уровне 2 * n - 1 число звездочек

    let result = " ".repeat((baseOfTree - 1) / 2) + "|" + " ".repeat((baseOfTree - 1) / 2) + "\n"; //(baseOfTree - 1) / 2 - кол-во пробелов перед и после ствола

    for(let padding = 0; padding < height - 1; ++padding) { //padding - кол-во пробелов перед и после звездочек
        result = " ".repeat(padding) + "*".repeat(baseOfTree - 2 * padding) + " ".repeat(padding) + "\n" + result; // baseOfTree - 2 * padding - кол-во звездочек на текущем уровне
    }
    
    return result;
};
