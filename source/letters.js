'use strict';

// const letters = words => Array.from(words).filter((word, index) => words.indexOf(word) === index).join('');

const removeAll = (words, word) => {
    let current;
    while (current = words.indexOf(word) !== -1) {
        words.splice(current)
    }
}

const letters = (words, op = null) => {
    Array.from(words).forEach((word, index) => {
        let first_index = words.indexOf(word);
        if (first_index !== index) {
            switch (op) {
                case null:
                    removeAll(words, word);
                    break;
                case true:
                    words.splice(index);
                    break;
                case false:
                    words.splice(first_index);
            }
        }
    })
}
