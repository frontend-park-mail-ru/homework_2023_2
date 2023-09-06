'use strict';

// const letters = words => Array.from(words).filter((word, index) => words.indexOf(word) === index).join('');

const removeAll = (words, word) => {
    let current = words.indexOf(word);
    while (current !== -1) {
        words.splice(current, 1)
        current = words.indexOf(word)
    }

    return words
}

const letters = (words, op = null) => {
    words = Array.from(words)
    let set = new Set();
    words.forEach(function (word, index, arr) {
        let first_index = arr.indexOf(word);
        if (first_index !== index) {
            set.add(word)
        }
    })
    set.forEach(elem => words = removeAll(words, elem))


    return words.join('')
}

console.log(letters('prot otype'))