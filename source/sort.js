'use strict';

const localeCompare = (strArray) => { // сортировака по алфавиту
	return strArray.sort(function (a, b) {return a.localeCompare(b);});
}

const capitalize = (str) => { // делает первую букву прописной, остальные строчными
	if (typeof str === 'string' && str.length !== 0){ // проверяем тип и что не пустая
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	} else {
		return null
	}
}

const sort = (str) => {  
	if ( typeof str === 'string' ) { // проверяем тип
		str = str.replace(/\s+/g, ' ').trim(); // заменям повторяющиеся пробелы, убираем боковые пробелы
		let words = str.split(' '); 
		
		words = words.map((word) => { // заменил for на words.map
			word = localeCompare(word.split('')).join('')  
			word = capitalize(word);
			return word;
		});

		const sortedWords = localeCompare(words); // сортируем слова в предоложении 
		return sortedWords.join(' ');
	}
	else { // не строка
	    return null
	}
}
