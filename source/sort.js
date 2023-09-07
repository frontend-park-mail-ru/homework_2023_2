'use strict';

// эти 2 функции нужны, чтобы проверять, что строка состоит только из русских или английских букв
function isEnglish(str) { // 
	return /^[A-Za-z ]+$/.test(str);
}

function isRussian(str) {
	return /^[А-Яа-яё ]+$/.test(str);
}

const sort = function (str) { 
	if ( (isEnglish(str) ^ isRussian(str)) && str.trim().length != 0 ) { // только русские или только английские буквы + проверям, что не из пробелов/пустая
		str = str.replace(/\s+/g, ' ').trim(); // заменям повторяющиеся пробелы, убираем боковые пробелы
		let words = str.split(' '); 
		
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].split('').sort(function (a, b) {return a.localeCompare(b);}).join(''); // без localeCompare неправильно сортируется ё
			words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(); //первая прописная, остальные строчные 
		}
		
		const sortedWords = words.sort(function (a, b) {return a.localeCompare(b);}); // сортируем слова в предоложении 
		return sortedWords.join(' ');
	}
	else { // не те символы / пустая строка / строка из пробелов / мешанина из рус и англ букв => некорректный ввод
	    return 'Incorrect string'
	}
}