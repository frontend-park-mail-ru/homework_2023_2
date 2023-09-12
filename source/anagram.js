'use strict';


/**
 * Groups anagram words from an array.
 *
 * This function takes an array of strings and groups the strings that are anagrams
 * of each other into subarrays within a result array.
 *
 * @param {string[]} input - The input array of strings.
 * @returns {string[][]}   - An array of anagram string groups.
 */


const anagram = (input) => {
    if (!Array.isArray(input)) {
        return [];
    }
    const anagram_groups = {};

    input.forEach((el) => {

        if (typeof el === 'string' && el.trim() !== '') {
            const word_sorted = el.split('').sort().join('');

            (anagram_groups[word_sorted])? anagram_groups[word_sorted].push(el) : anagram_groups[word_sorted] = [el];
        }
    });

    const result = Object.values(anagram_groups).filter((group) => group.length >= 2);

    result.forEach((group) => group.sort());

    return result.sort();
}
