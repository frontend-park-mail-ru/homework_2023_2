'use strict';


const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

function countLetters(word) {
    if (typeof word !== "string") {
        throw new TypeError("word must be string")
    }

    word = word.toLowerCase()
    let letterCount = {};
    for (let i = 0; i < word?.length; i++) {
        letterCount[word[i]] = letterCount[word[i]] + 1 || 1;
    }

    return letterCount;
}

function areAnagrams(firstWord, secondWord) {
    if (firstWord === null || secondWord === null)
        return false
    if (typeof firstWord !== "string" || typeof secondWord !== "string") {
        throw new TypeError("word must be string")
    }
    if (firstWord?.length != secondWord?.length)
        return false;

    let letterCountFirst = countLetters(firstWord);
    let letterCountSecond = countLetters(secondWord);

    for (let letter in letterCountFirst) {
        if (letterCountFirst[letter] != letterCountSecond[letter]) {
            return false;
        }
    }
    return true;
}

function anagram(inputWords) {
    if (inputWords === null)
        return null

    if (!Array.isArray(inputWords) || typeof inputWords[0] !== "string") {
        throw new TypeError("argument must be an array of strings")
    }

    let words = clone(inputWords)
    words.sort();
    let result = [];
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
