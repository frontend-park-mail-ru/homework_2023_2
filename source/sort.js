'use strict';

const sort = inputString => inputString.split(" ")
    .map((element) => {
        const sortedWord = element.split("")
            .sort((a, b) => a.localeCompare(b, 'ru'))
            .join("")
            .toLowerCase();
        return sortedWord.charAt(0).toUpperCase() + sortedWord.slice(1);
    })
    .sort((a, b) => a.localeCompare(b, 'ru'))
    .join(" ");
