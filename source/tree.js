'use strict';

/**
 * function create a tree 
 * @param  {(Number|String), (Number|String)} arg contain height of the tree and height of the trunk
 * @returns {String} tree
 * @throws Will throw an error if the value of height is invalid
 */

const tree = (height, trunkHeight = 1) => {

    const level = (strings, character, amountOfChar, amountOfSpace) => {
        return ' '.repeat(amountOfSpace) + `${character}`.repeat(amountOfChar) + ' '.repeat(amountOfSpace);
    }

    if (isNaN(height) ||  height === '' || !isFinite(height)) {
        throw new Error('Error: invalid value of height');
    }

    if (height < 3) {
        return null;
    }

    if (isNaN(trunkHeight) || trunkHeight === "" || trunkHeight >= height || !isFinite(trunkHeight)) {
        throw new Error('Error: invalid value of trunk height');
    }

    const trunkWidth = 1;
    const baseOfTree = 2 * (height - trunkHeight) - 1;

    let result = '';
    for(let i = 0; i < trunkHeight; ++i) {
        result = `${level `${'|'}${trunkWidth}${(baseOfTree - trunkWidth) / 2}`}\n${result}`;
    }

    for(let padding = 0; padding < height - trunkHeight; ++padding) {
        result = `${level `${'*'}${baseOfTree - 2 * padding}${padding}`}\n${result}`;
    }
    
    return result;
};
