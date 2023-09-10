'use strict';

const level = (strings, character, amountOfChar, amountOfSpace) => {
    return " ".repeat(amountOfSpace) + `${character}`.repeat(amountOfChar) + " ".repeat(amountOfSpace);
}

/**
 * function create a tree 
 * @param  {(Number|String), (Number|String)} arg contain height of the tree and height of the trunk
 * @returns {String} tree
 * @throws Will throw an error if the value of height is invalid
 */

const tree = (height, trunkHeight = 1) => {
    if (isNaN(height) || height === Infinity || height === "") {
        throw new Error("Error: invalid value of height");
    }

    if (height < 3) {
        return null;
    }

    if (isNaN(trunkHeight) || trunkHeight === Infinity || trunkHeight === "" || trunkHeight >= height) {
        throw new Error("Error: invalid value of trunk height");
    }

    const trunkWidth = 1; //ширина ствола
    const baseOfTree = 2 * (height - trunkHeight) - 1; //кол-во звездочек на нижнем уровне елки, так как на n уровне 2 * n - 1 число звездочек

    let result = "";
    for(let i = 0; i < trunkHeight; ++i) {
        result = `${level `${"|"}${trunkWidth}${(baseOfTree - trunkWidth) / 2}`}\n${result}`; //(baseOfTree - trunkWidth) / 2 - кол-во пробелов перед и после ствола
    }

    for(let padding = 0; padding < height - trunkHeight; ++padding) { //padding - кол-во пробелов перед и после звездочек
        result = `${level `${"*"}${baseOfTree - 2 * padding}${padding}`}\n${result}`; // baseOfTree - 2 * padding - кол-во звездочек на текущем уровне
    }
    
    return result;
};
