'use strict';

const localeCompare = (strArray) => strArray.sort( (a, b) => a.localeCompare(b) ); // сортировка по алфавиту

const capitalize = (str) => str.length !== 0 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : null; // первая буква прописная, остальные строчные 

const sort = (str) => {  
	if ( typeof str !== 'string' ) { // проверяем тип
		throw new TypeError('Аргумент должен быть строкой'); // добавил ранний выход с выбрасыванием TypeError
	}

	return localeCompare(str.replace(/\s+/g, ' ').trim().split(' ').map((word) => { // все впихнул в один return
		word = localeCompare(word.split('')).join('')  
		word = capitalize(word);
		return word;
	})).join(' ');
}
		