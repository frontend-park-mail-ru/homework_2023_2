'use strict';

function isEnglish(str) {
	return /^[A-Za-z ]+$/.test(str);
}

function isRussian(str) {
	return /^[А-Яа-яё ]+$/.test(str);
}

const sort = function (str) { 
	if ( (isEnglish(str) ^ isRussian(str)) && str.trim().length != 0 ) { 
		str = str.replace(/\s+/g, ' ').trim();
		let words = str.split(' ');
		
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].split('').sort(function (a, b) {return a.localeCompare(b);}).join('');
			words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
		}
		
        
		const sortedWords = words.sort(function (a, b) {return a.localeCompare(b);});
		return sortedWords.join(' ');
	}
	else {
	    return 'Incorrect string'
	}
}