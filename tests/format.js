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

	QUnit.test('format работает правильно с 5 колонками', function(assert) {
		const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

		const expected5 = 
		'   0    1     2     10 100\n' +
		'-100 1000 10000 -10000';

		assert.strictEqual(format(input, 5), expected5);
	})

	QUnit.test('format работает правильно с N колонками, где N - кол-во чисел в массиве', function(assert) {
		const input = [0, 1, 2, 10, 100, -100, 1000, 10000, -10000];

		const expected5 = '0 1 2 10 100 -100 1000 10000 -10000';

		assert.strictEqual(format(input, input.length), expected5);
	})

	QUnit.test('format работает правильно с неотсортированным массивом', function(assert) {
		const input = [1000, 0, 10, 10000000, 0, 0, 1, 1];

		const expected6 = 
		'    1000\n' +
		'       0\n' +
		'      10\n' +
		'10000000\n' +
		'       0\n' +
 		'       0\n' + 
		'       1\n' +
		'       1';

		assert.strictEqual(format(input, 1), expected6);
	})

	QUnit.test('format работает правильно с неотсортированным массивом и тремя колонками', function(assert) {
		const input = [1000, 0, 10, 10000000, 0, 0, 1, 1];

		const expected6 = 
		'    1000 0 10\n' +
		'10000000 0  0\n' +
		'       1 1';

		assert.strictEqual(format(input, 3), expected6);
	})

	QUnit.test('format выбрасывает исключение, если подалось число <= 0', function(assert) {
		assert.throws(
			function () {
				format([], -1);
			},
		);
	});

	QUnit.test('format выбрасывает исключение, если мы подали в input любой тип, но не массив', function(assert) {
		assert.throws(
			function() {
				format(5, 5);
			},
		);
	});
});
