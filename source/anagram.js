'use strict';


/**
 * Groups anagram words from an array.
 *
 * This function takes an array of strings and groups the strings that are anagrams
 * of each other into subarrays within a result array.
 *
 * @param {string[]} input - The input array of strings.
 * @returns {string[][]}   - An array of anagram string groups.
 * @throws {TypeError}     - invalid arguments
 */
const anagram = (input) => {
    if (input === undefined || !Array.isArray(input) || !input.every(item => (typeof item === 'string' || item instanceof String))) {
        throw new TypeError("No correct parametr's");
    }
    const anagram_groups = {};

    input.forEach((el) => {

        if ((typeof el === 'string' || el instanceof String) && el.trim() !== '') {
            const word_sorted = el.split('').sort().join('');

            (anagram_groups[word_sorted])? anagram_groups[word_sorted].push(el) : anagram_groups[word_sorted] = [el];
        }
    });

    const result = Object.values(anagram_groups).filter((group) => group.length >= 2);

    result.forEach((group) => group.sort());

    return result.sort();
}
