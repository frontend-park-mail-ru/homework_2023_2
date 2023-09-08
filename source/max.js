'use strict';

const max = numbers => Math.max(...numbers);

const anagram = (words) => {
const groups = {};

for (const word of words) {
const sortedWord = word.split('').sort().join('');

if (!groups[sortedWord]) {
groups[sortedWord] = [];
}

groups[sortedWord].push(word);
}

const anagramGroups = [];

for (const sortedWord in groups) {
if (groups[sortedWord].length >= 2) {
anagramGroups.push(groups[sortedWord].sort());
}
}

return anagramGroups.sort();
};