'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('solve выкидывает ошибку при неправильном ' +
			   'количестве аргументов', function (assert) {
		assert.throws(() =>
			{solve('x + 1'); },
			new Error('Error: incorrect number of arguments'),
			'Error thrown'
		);
		assert.throws(() =>
			{solve(); },
			new Error('Error: incorrect number of arguments'),
			'Error thrown'
		);
		assert.throws(() =>
			{solve(1, 1, 1); },
			new Error('Error: incorrect number of arguments'),
			'Error thrown'
		);
	});

	QUnit.test('solve выкидывает ошибку при неправильном ' +
			   'типе аргументов', function (assert) {
		assert.throws(() =>
			{solve(1, 'x + 1'); },
			new Error('Error: incorrect type of arguments'),
			'Error thrown'
		);
		assert.throws(() =>
			{solve(1, 1); },
			new Error('Error: incorrect type of arguments'),
			'Error thrown'
		);
	});

	QUnit.test('solve выкидывает ошибку при невалидных данных', function (assert) {
		assert.throws(() =>
			{solve('y + 1', 1); },
			new Error('Error: found forbidden characters'),
			'Error thrown'
		);
	});

	QUnit.test('solve выкидывает ошибку при попытке вызвать функцию, ' +
			   'отличную от арифметических операторов', function (assert) {
		assert.throws(() =>
			{solve('alert("1")', 1); },
			new Error('Error: found forbidden characters'),
			'Error thrown'
		);
	});
});
