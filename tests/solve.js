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

	QUnit.test('solve работает как калькулятор при отсутствии x', function (assert) {
		assert.strictEqual(solve('1 + 1'), 2);
		assert.strictEqual(solve('2 + 5 - 1'), 6);
		assert.strictEqual(solve('2 * 5 - 1'), 9);
		assert.strictEqual(solve('2 * ( 5 - 1 )'), 8);
		assert.strictEqual(solve('(5 - 3) * (3 + 5)'), 16);
		assert.strictEqual(solve('((5 - 3) * (3 + 5)) * 3 * 3'), 144);
	});
});
