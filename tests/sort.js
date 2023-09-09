'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});

	QUnit.test('Функция работает в предложениях и делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('маМа мЫЛа РАму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('кОсмиЧЕскиЙ КОРАБЛЬ летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i LOVE fRonTend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});

	QUnit.test('Функция работает со спец. символами', function (assert) {
		assert.strictEqual(sort('word123 @#&'), '@&# 123dorw');
	});

	QUnit.test('Функция работает с пустым вводом', function (assert) {
		assert.strictEqual(sort(''), '');
		assert.strictEqual(sort('   '), '   ');
	});

	QUnit.test('Функция обрабатывает некоректный ввод', function (assert) {
		assert.throws(function() {
			sort([]);
		}, 'Входной аргумент должен быть строкой');
		assert.throws(function() {
			sort(123);
		}, 'Входной аргумент должен быть строкой');
		assert.throws(function() {
			sort(0);
		}, 'Входной аргумент должен быть строкой');
	});
});
