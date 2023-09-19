'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			['барокко', 'коробка'],
			['кот', 'ток'],
			['липа', 'пила'],
			['пост', 'стоп']
		];

		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно если не все слова являются анаграммами', function (assert) {
		const input = [
			'кот', 'ко', 'ток', 'ок', 'стул'
		];

		const output = [
			['ко', 'ок'],
			['кот', 'ток'],
		];

		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно при получении null', function (assert) {
		const input = null;

		const output = null;

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно при отсутствии анаграмм', function (assert) {
		const input = ['hello', 'again', 'stool'];

		const output = []

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с одинаковыми словами', function (assert) {
		const input = ['hello', 'hello', 'hello'];

		const output = [['hello', 'hello', 'hello']]

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция выдает ошибку если передан не массив слов', function (assert) {
		const input = 5;

		assert.throws(function () {
			anagram(input);
		},
			TypeError
		);
	});
});
