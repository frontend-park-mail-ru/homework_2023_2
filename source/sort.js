'use strict';

const localeCompare = (a, b) => a.localeCompare(b); 

const capitalize = (str) => str.length !== 0 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : null; // первая буква прописная, остальные строчные 

const sort = (str) => {  
	if ( typeof str.toString() !== 'string' ) { 
		throw new TypeError('Аргумент должен быть строкой'); // добавил ранний выход с выбрасыванием TypeError
	}

	return str.replace(/\s+/g, ' ') 
		.trim()
		.split(' ')
		.map((word) => capitalize(word.split('') // теперь map без return 
			.sort(localeCompare)
			.join('')))
		.sort(localeCompare)
		.join(' ');
}
