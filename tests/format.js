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

	QUnit.test('format работает правильно c некорректными входными данными (вместо массива чисел передана строка)', function (assert) {
		const input = "qwertyu";

		assert.throws(()=>format(input, 3), new TypeError("A string was passed as input instead of array of numbers"));
	});

	QUnit.test('format работает правильно c некорректными входными данными (вместо количества столбцов передан объект)', function (assert) {
		const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const inputCol = new Object();

		assert.throws(()=>format(inputArray, inputCol), new TypeError("A object was passed as input instead of number of columns"));
	});

	QUnit.test('format работает правильно c некорректными входными данными (вместо массива чисел передан массив строк)', function (assert) {
		const inputArray = ['10', '2', '300', '4'];

		assert.throws(()=>format(inputArray, 2), new TypeError("An array of strings was passed as input instead of array of numbers"));
	});
});


