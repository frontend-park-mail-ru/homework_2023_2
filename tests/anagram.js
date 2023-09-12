'use strict';

QUnit.module('Тестируем функцию anagram', function () {

	QUnit.test('Функция работает правильно. Тест 1', function (assert) {
		const input = [
			'мольба', 'рано', 'карета',
			'ракета', 'ток', 'просо',
			'опрос', 'нора', 'альбом',
			'ответ', 'прилив' , 'клавиатура'
		];

		const output = [
			[ 'альбом', 'мольба' ],
			[ 'карета', 'ракета' ],
			[ 'нора', 'рано' ],
			[ 'опрос', 'просо' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно. Тест 2', function (assert) {
		const input = [
			'кулон', 'клоун', 'фарш',
			'карма', 'марка', 'числа',
			'число', 'мода', 'дома',
			'шарф' , 'логика', 'помощь'
		];

		const output = [
			[ 'дома', 'мода' ],
			[ 'карма', 'марка' ],
			[ 'клоун', 'кулон' ],
			[ 'фарш', 'шарф' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно. Тест 3', function (assert) {
		const input = [
			'кабан', 'мышка', 'телефон',
			'стоп', 'банка', 'кошка',
			'липа', 'камыш', 'пост', 'пила'
		];

		const output = [
			[ 'банка', 'кабан' ],
			[ 'камыш', 'мышка' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция обрабатывает undefined. Тест 1', function (assert) {
		const input = undefined

		const output = [];

		assert.deepEqual(anagram(input), output);
	});


	QUnit.test('Функция обрабатывает undefined. Тест 2', function (assert) {
		const input = [
			undefined, undefined
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция обрабатывает undefined. Тест 3', function (assert) {
		const input = [
			undefined, undefined,
			'кот', 'ток'
		];

		const output = [['кот', 'ток']];

		assert.deepEqual(anagram(input), output);
	});
	
	QUnit.test('Обработка функцией значений undefined и анаграмм в массиве ввода. Тест 4', function (assert) {
		const input = ['listen', undefined, 'silent'];
		const output = [['listen', 'silent']];
	
		assert.deepEqual(anagram(input), output);
	});
	
	QUnit.test('Обработка функцией значений undefined и не-строковых элементов в массиве ввода . Тест 5', function (assert) {
		const input = [undefined, 123, null, 'hello', undefined, true, 'world'];
		const output = [];
	
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Обработка функцией значений undefined и не-строковых элементов в массиве ввода . Тест 6', function (assert) {
		const input = [undefined, 123, null, 'клоун', 'кулон', undefined, true, 'world', 'drow'];
		
		const output = [
			[ "клоун", "кулон"]
		];
	
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает с пустым входным массивом', function (assert) {
		const input = [];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает с одним словом', function (assert) {
		const input = ['кот'];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает с пустыми строками', function (assert) {
		const input = ['кот', '', 'ток', '', ' ', ' '];
		const output = [['кот', 'ток']];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает с анаграмами в разных порядках', function (assert) {
		const input = ['кот', 'ток'];
		const output = [['кот', 'ток']];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает с разными длинами слов', function (assert) {
		const input = ['кот', 'то', 'ток'];
		const output = [['кот', 'ток']];

		assert.deepEqual(anagram(input), output);
	});
});
