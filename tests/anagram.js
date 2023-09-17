'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});
		
	QUnit.test('Тест - не у всех слов есть пара', function (assert) {
		const input = [
			'анаграмма', 'магнат', 
			'кот', 'ток', 
			'бар', 'раб'
		];
		const result = anagram(input);
		const expected = [
			['бар', 'раб'], 
			['кот', 'ток']
		];
		assert.deepEqual(result, expected);
	});
		
	QUnit.test('Пустой ввод', function (assert) {
		const input = [];
		const result = anagram(input);
		const expected = [];
		assert.deepEqual(result, expected);
	});
		
	QUnit.test('Одно слово', function (assert) {
		const input = ['один'];
		const result = anagram(input);
		const expected = [];
		assert.deepEqual(result, expected);
	});
		
	QUnit.test('Тест с анаграммами из одной буквы', function (assert) {
		const result = anagram(['a', 'b', 'c', 'd', 'e']);
		assert.deepEqual(result, []);
	  
	});

	QUnit.test('Вход - не массив', function (assert) {
		const input = 'не массив';
		assert.throws(() => anagram(input), TypeError, 'Параметр `words` должен быть массивом строк.');
	});
	  
	QUnit.test('Вход - массив с элементами других типов', function (assert) {
		const input = [42, true, {}, null];
		assert.throws(() => anagram(input), TypeError, 'Все элементы массива `words` должны быть строками.');
	});

	QUnit.test('Вход - функция', function (assert) {
		const input = () => {};
		assert.throws(() => anagram(input), TypeError, 'Параметр `words` должен быть массивом строк.');
	});
		
	QUnit.test('Вход - объект', function (assert) {
		const input = { key: 'value' };
		assert.throws(() => anagram(input), TypeError, 'Параметр `words` должен быть массивом строк.');
	});
		
	QUnit.test('Вход - null', function (assert) {
		const input = [null, null, null];
		assert.throws(() => anagram(input), TypeError, 'Все элементы массива `words` должны быть строками.');
	});
		
	QUnit.test('Вход - undefined', function (assert) {
		const input = [undefined, undefined, undefined];
		assert.throws(() => anagram(input), TypeError, 'Все элементы массива `words` должны быть строками.');
	});
});
