'use strict';

/**
 * function returns pairs of anagram words
 * @param {array} input
 */
const anagram = (input) => {
    const anagram_groups = {};

    input.forEach( (el) => {
        if (el.trim() !== '') {
            const word_sorted = el.split('').sort().join('');

            (anagram_groups[word_sorted])? anagram_groups[word_sorted].push(el) : anagram_groups[word_sorted] = [el];
        }
    });

    const result = Object.values(anagram_groups).filter( (group) => group.length >= 2);

    result.forEach( (group) => group.sort());

    return result.sort();
}