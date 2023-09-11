'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.throws(function () {chess(1);}, TypeError, 'Должна выбрасываться ошибка TypeError');
		assert.throws(function () {chess('1');}, TypeError, 'Должна выбрасываться ошибка TypeError');
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

	QUnit.test('Число с плавающей точкой', function (assert) {
		assert.throws(function () {chess(666.666);}, TypeError, 'Должна выбрасываться ошибка TypeError');
	  });
	
	  QUnit.test('Отрицательное число', function (assert) {
		assert.throws(function () {chess(-89);}, TypeError, 'Должна выбрасываться ошибка TypeError');
	  });

	QUnit.test('Строку нельзя использовать как входные данные', function (assert) {
		assert.throws(function () {chess('ABRAKADABRA');}, TypeError, 'Должна выбрасываться ошибка TypeError');
  	});

});
