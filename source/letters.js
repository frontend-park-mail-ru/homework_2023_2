'use strict';

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

    switch (op) {
        case null:
            let set = new Set();
            words.forEach((word, index, arr) => {
                if (arr.indexOf(word) !== index) set.add(word);
            })

            set.forEach(elem => words = removeAll(words, elem))
            break;

        case true:
            words = words.filter((word, index) => words.indexOf(word) === index);
            break;

        case false:
            words = words.filter((word, index) => words.lastIndexOf(word) === index);
            break;
    }

    return words.join('')
}
