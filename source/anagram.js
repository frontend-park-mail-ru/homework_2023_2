'use strict';

let countLetters = (word) => {
    //word = word.toLowerCase();
    let letterCount = [];
    for (let i = 0; i < word?.length; i++) {
        /*if (word[i].toUpperCase() === word[i].toLowerCase()) {
            return null;
        }*/
        letterCount[word[i]] = letterCount[word[i]] + 1 || 1;
    }
    return letterCount;
}

let areAnagrams = (firstWord, secondWord) => {
    let letterCountFirst = countLetters(firstWord);
    let letterCountSecond = countLetters(secondWord);
    for (let letter in letterCountFirst) {
        if (letterCountFirst[letter] != letterCountSecond[letter]) {
            return false;
        }
    }
    return true;
}

let anagram = (words) => {
    let result = [];
    let anagramLine = [];
    let lettersPerWord = [];
    for (let i = 0; i < words?.length; i++) {
        lettersPerWord[i] = countLetters(words[i]);
    }

    for (let i = 0; i < words?.length; i++) {
        if (words[i] == null) {
            continue;
        }

        for (let j = i + 1; j < words?.length; j++) {
            if (areAnagrams(words[i], words[j])) {
                anagramLine.push(words[j]);
                words[j] = null;
            }
        }
        if (anagramLine.length > 0) {
            anagramLine.push(words[i]);
            result.push(anagramLine);
            anagramLine = [];
        }
        words[i] = null;
    }
    return result;
}
