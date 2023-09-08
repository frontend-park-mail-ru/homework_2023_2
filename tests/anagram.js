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
