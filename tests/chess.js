'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматной доски с отрицательными сторонами не бывает', function (assert) {
		assert.strictEqual(chess(-10), null);
		assert.strictEqual(chess('-10'), null);
	});

	QUnit.test('Шахматной доски с нецелыми сторонами не бывает', function (assert) {
		assert.strictEqual(chess(1.5), null);
		assert.strictEqual(chess('1.5'), null);
	});

	QUnit.test('Нельзя передать слово вместо размера', function (assert) {
		assert.strictEqual(chess('abcd'), null);
		assert.strictEqual(chess('10abcd'), null);
	});

	QUnit.test('Нельзя передать пустую строчку вместо размера', function (assert) {
		assert.strictEqual(chess(' '), null);
	});

	QUnit.test('Нельзя передать объект вместо размера', function (assert) {
		assert.strictEqual(chess(Math), null);
	});

	QUnit.test('Нельзя передать bool вместо размера', function (assert) {
		assert.strictEqual(chess(true), null);
	});

	QUnit.test('Нельзя передать null вместо размера', function (assert) {
		assert.strictEqual(chess(null), null);
	});

	QUnit.test('Нельзя передать undefined вместо размера', function (assert) {
		assert.strictEqual(chess(undefined), null);
	});

	QUnit.test('Нельзя передать NaN вместо размера', function (assert) {
		assert.strictEqual(chess(NaN), null);
	});

	QUnit.test('Шахматной доски бесконечного размера не бывает', function (assert) {
		assert.strictEqual(chess(Infinity), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

});
