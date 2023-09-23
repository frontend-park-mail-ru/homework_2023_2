'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('Работает правильно', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		assert.strictEqual(solve('x', 74), 74);
		assert.strictEqual(solve(new String('x + 5'), 3), 8);
	});

	QUnit.test('Работает правильно с отрицательными числами', function (assert) {
		assert.strictEqual(solve('x * x - 15 + x + 2', -10), 77);
		assert.strictEqual(solve('x * x * x - 13 * x + 31', -5), -29);
		assert.strictEqual(solve('-7 * x - 1', -5), 34);
	});

	QUnit.test('Работает правильно с константами', function (assert) {
		assert.strictEqual(solve('1 + 5 * 3 - 4 / 2', -5), 14);
		assert.strictEqual(solve('150', 9), 150);
	});

	QUnit.test('Работает правильно с бесконечностью', function (assert) {
		assert.strictEqual(solve('x + 5 * x - 4 / x', 0), -Infinity);
		assert.strictEqual(solve('10 + 5 / (3 - x)', 3), Infinity);
		assert.strictEqual(solve('5 / x + 1', Infinity), 1);
	});

	QUnit.test('Работает правильно с пробелами', function (assert) {
		assert.strictEqual(solve(' 2 *   ( x- 1) ', 5), 8);
		assert.strictEqual(solve(' ', 10), undefined);
	});

	QUnit.test('Работает правильно с некорректным вводом', function (assert) {
		assert.throws(function() {solve('(2*y - 4) / 3', 1);}, new Error('Unexpected symbol: y'));
		assert.throws(function() {solve('xx - 2*x + 4x', 1);}, new Error('Two variables are in a row'));
		assert.throws(function() {solve('10x -- x + 1', 1);}, new Error('Two operators are in a row'));
		assert.throws(function() {solve('(15 + x * 2', 9);}, new Error('Invalid operator or brackets matching is broken'));
		assert.throws(function() {solve('2*x*x + 15 ** x', 4);}, new Error('Two operators are in a row'));
		assert.throws(function() {solve('let arr = [];', 100500);}, new Error('Unexpected symbol: l'));

		assert.throws(function() {solve(2 * 5 + 1, 4);}, new Error('Invalid input types: (number, number) instead of (string, number)'));
		assert.throws(function() {solve(BigInt(123), true);}, new Error('Invalid input types: (bigint, boolean) instead of (string, number)'));
	});
});
