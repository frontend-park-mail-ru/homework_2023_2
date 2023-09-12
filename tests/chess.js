'use strict';

QUnit.module('Тестируем функцию chess', function () {

	QUnit.test('Передача в качестве длины шахматной доски null', function (assert) {
		assert.throws(function() {chess(null)}, TypeError);
		assert.throws(function() {chess('null')}, TypeError);
	});

	QUnit.test('Передача в качестве длины шахматной доски NaN', function (assert) {
		assert.throws(function() {chess(NaN)}, TypeError);
		assert.throws(function() {chess('NaN')}, TypeError);
	});

	QUnit.test('Передача в качестве длины шахматной доски bool', function (assert) {
		assert.throws(function() {chess(true)}, TypeError);
		assert.throws(function() {chess('true')}, TypeError);
	});

	QUnit.test('Передача в качестве длины шахматной доски массив', function (assert) {
		assert.throws(function() {chess([1, 2])}, TypeError);
	});

	QUnit.test('Передача в качестве длины шахматной доски undefined', function (assert) {
		assert.throws(function() {chess(undefined)}, TypeError);
	});

	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.throws(function() {chess(1)}, TypeError);
		assert.throws(function() {chess('1')}, TypeError);
	});

	QUnit.test('Шахматной доски с отрицательной стороной не бывает', function (assert) {
		assert.throws(function() {chess(-1)}, TypeError);
		assert.throws(function() {chess('-1')}, TypeError);
	});

	QUnit.test('Шахматной доски с не целой длиной стороны не бывает', function (assert) {
		assert.throws(function() {chess(2.5)}, TypeError);
		assert.throws(function() {chess('2.5')}, TypeError);
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
