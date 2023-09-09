'use strict';

QUnit.module('Тестируем функцию chess', function () {

	QUnit.test('Передача в качестве длины шахматной доски null', function (assert) {
		assert.strictEqual(chess(null), null);
		assert.strictEqual(chess('null'), null);
	});

	QUnit.test('Передача в качестве длины шахматной доски NaN', function (assert) {
		assert.strictEqual(chess(NaN), null);
		assert.strictEqual(chess('NaN'), null);
	});

	QUnit.test('Передача в качестве длины шахматной доски bool', function (assert) {
		assert.strictEqual(chess(true), null);
		assert.strictEqual(chess('true'), null);
	});

	QUnit.test('Передача в качестве длины шахматной доски массив', function (assert) {
		assert.strictEqual(chess([1, 2]), null);
	});

	QUnit.test('Передача в качестве длины шахматной доски undefined', function (assert) {
		assert.strictEqual(chess(undefined), null);
	});

	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматной доски с отрицательной стороной не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess('-1'), null);
	});

	QUnit.test('Шахматной доски с не целой длиной стороны не бывает', function (assert) {
		assert.strictEqual(chess(2.5), null);
		assert.strictEqual(chess('2.5'), null);
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

	QUnit.test('Шахматная доска 5 на 5', function (assert) {
		const expected =
			'* * *\n' +
			' * * \n' +
			'* * *\n' +
			' * * \n' +
			'* * *\n';
		assert.strictEqual(chess(5), expected);
		assert.strictEqual(chess('5'), expected);
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
