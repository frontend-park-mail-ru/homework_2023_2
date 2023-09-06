// Коваленко Григорий web-21
'use strict';


const anagram = (input) => {
     const anagram_groups = {};

     input.forEach(el => {
          const word_sorted = el.split('').sort().join('');

          if (anagram_groups[word_sorted])
               anagram_groups[word_sorted].push(el);
          else
               anagram_groups[word_sorted] = [el];
     });

     const result = Object.values(anagram_groups).filter(group => group.length >= 2);

     result.forEach(group => group.sort());

     return result.sort();
}