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
		
		QUnit.test('Дополнительный тест 1', function (assert) {
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
		const input = ['a', 'b', 'c', 'd', 'e'];
		const result = anagram(input);
		const expected = [];
		assert.deepEqual(result, expected);
		});
		
});


