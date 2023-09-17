'use strict';

/**
 * Deep clones array or string
 * @param {array|string} items - variable to be deep copy
 * @returns {array|string} - a deep copy of items
 */

const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);


/**
 * Creates an object containing an amount of times each letter is met in a word
 * @param {string} word - string that we count letters in
 * @returns {Object.<string, number>} - object containing letter: number - amount of times letter is found in a word
 */
function countLetters(word) {
    if (typeof word !== "string") {
        throw new TypeError("word must be string")
    }

    word = word.toLowerCase()
    const letterCount = {};
    for (let i = 0; i < word?.length; i++) {
        letterCount[word[i]] = letterCount[word[i]] + 1 || 1;
    }

    return letterCount;
}

/**
 * Checks whether given words are anagrams
 * @param {?string} firstWord - first word
 * @param {?string} secondWord - second word
 * @returns {boolean} - true of word is an anagram, false otherwise
 */
function areAnagrams(firstWord, secondWord) {
    if (firstWord === null || secondWord === null)
        return false
    if (typeof firstWord !== "string" || typeof secondWord !== "string") {
        throw new TypeError("word must be string")
    }
    if (firstWord?.length != secondWord?.length)
        return false;

    const letterCountFirst = countLetters(firstWord);
    const letterCountSecond = countLetters(secondWord);

    for (let letter in letterCountFirst) {
        if (letterCountFirst[letter] != letterCountSecond[letter]) {
            return false;
        }
    }
    return true;
}


/**
 * Groups anagrams into arrays and returns an array of those groups
 * @param {?Array.<string>} inputWords - array of words to check for anagrams
 * @returns {?Array.<Array.<string>>} - array of anagrams grouped into arrays
 */
function anagram(inputWords) {
    if (inputWords === null)
        return null

    if (!Array.isArray(inputWords) || typeof inputWords[0] !== "string") {
        throw new TypeError("argument must be an array of strings")
    }

    const words = clone(inputWords)
    words.sort();
    const result = [];
    let anagramGroup = [];

    for (let i = 0; i < words?.length; i++) {
        if (words[i] == null) {
            continue;
        }

        for (let j = i + 1; j < words?.length; j++) {
            if (areAnagrams(words[i], words[j])) {
                if (anagramGroup.length === 0) {
                    anagramGroup.push(words[i])
                }
                anagramGroup.push(words[j]);
                words[j] = null;
            }
        }
        if (anagramGroup.length > 0) {
            result.push(anagramGroup);
            anagramGroup = [];
        }
        words[i] = null;
    }
    return result;
}
