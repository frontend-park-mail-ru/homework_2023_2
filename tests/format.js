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

	QUnit.test('format работает правильно c пустым множеством', function (assert) {
		const input = [];
	
		const expected ='';
	
		assert.strictEqual(format(input, 1), expected);
	});
	
	QUnit.test('format работает правильно c некорректным количеством колонок', function (assert) {
		const input = [];
	
		const expected0 ='';
		const expectedNegative ='';
	
		assert.strictEqual(format(input, 0), expected0);
		assert.strictEqual(format(input, -3), expectedNegative);
	});
	
	QUnit.test('format работает правильно c одинаковыми по длине числами', function (assert) {
		const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
		const expected =
			'1 2 3\n' +
			'4 5 6\n' +
			'7 8 9';

	
		assert.strictEqual(format(input, 3), expected);
	});
});


