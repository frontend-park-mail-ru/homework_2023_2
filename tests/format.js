'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает...', function (assert) {
		const input = [ 0, 123, 321, 332, 32, 1, 0, -12938, -234 ];

		const expected =
			'     0\n' +
			'   123\n' + 
			'   321\n' + 
			'   332\n' + 
			'    32\n' + 
			'     1\n' +
			'     0\n' +
			'-12938\n' +
			'  -234'

		const expected2 =
			'   0    123\n' +
			' 321    332\n' +
			'  32      1\n' +
			'   0 -12938\n' +
			'-234'

		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 2), expected2);
	});

	QUnit.test("format работает с пустым массивом", function (assert) {
		const input = [];

		const expected = '';

		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 2), expected);
		assert.strictEqual(format(input, 3), expected);
	});
});
