'use strict';


const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

let countLetters = (word) => {
    if (typeof word !== "string") {
        throw new TypeError("word must be string")
    }

    let letterCount = [];
    for (let i = 0; i < word?.length; i++) {
        letterCount[word[i]] = letterCount[word[i]] + 1 || 1;
    }

    return letterCount;
}

let areAnagrams = (firstWord, secondWord) => {
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

let anagram = (inputWords) => {
    if (inputWords === null)
        return null

    if (!Array.isArray(inputWords) || typeof inputWords[0] !== "string") {
        throw new TypeError("argument must be an array of strings")
    }

    let words = clone(inputWords)
    words.sort();
    let result = [];
    let anagramLine = [];

    for (let i = 0; i < words?.length; i++) {
        if (words[i] == null) {
            continue;
        }

        for (let j = i + 1; j < words?.length; j++) {
            if (areAnagrams(words[i], words[j])) {
                if (anagramLine.length === 0) {
                    anagramLine.push(words[i])
                }
                anagramLine.push(words[j]);
                words[j] = null;
            }
        }
        if (anagramLine.length > 0) {
            result.push(anagramLine);
            anagramLine = [];
        }
        words[i] = null;
    }
    return result;
}
