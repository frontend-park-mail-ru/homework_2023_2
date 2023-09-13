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
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});


	QUnit.test('Функция обрабатывает undefined. Тест 2', function (assert) {
		const input = [
			undefined, undefined
		];

		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Функция обрабатывает undefined. Тест 3', function (assert) {
		const input = [
			undefined, undefined,
			'кот', 'ток'
		];

		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});
	
	QUnit.test('Обработка функцией значений undefined и анаграмм в массиве ввода. Тест 4', function (assert) {
		const input = ['listen', undefined, 'silent'];
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});
	
	QUnit.test('Обработка функцией значений undefined и не-строковых элементов в массиве ввода . Тест 5', function (assert) {
		const input = [undefined, 123, null, 'hello', undefined, true, 'world'];
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Обработка функцией значений undefined и не-строковых элементов в массиве ввода . Тест 6', function (assert) {
		const input = [undefined, 123, null, 'клоун', 'кулон', undefined, true, 'world', 'drow'];
		
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Обработка функцией значений не-строковых элементов в массиве ввода . Тест 7', function (assert) {
		const input = [true, false, false, true, true, true, true, false, true];
		
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Обработка функцией значений не-строковых элементов в массиве ввода . Тест 8', function (assert) {
		const input = [111, 325, 572, 22233, 8787, 44, 0, 87, 12];
		
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Обработка функцией значений не-строковых элементов в массиве ввода . Тест 9', function (assert) {
		const input = [{ name: 'Alice' }, { name: 'Bob' }];
		
		const err = new TypeError("No correct parametr's");

		assert.throws(() => anagram(input), err);
	});

	QUnit.test('Функция работает с пустым входным массивом', function (assert) {
		assert.deepEqual(anagram([]), []);
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

	QUnit.test('Функция работает с строками имеющими пробелы', function (assert) {
		const input = ['hello world', 'world hello'];
		const output = [["hello world", "world hello"]];

		assert.deepEqual(anagram(input), output);
	});
});
