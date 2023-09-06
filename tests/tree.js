'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Ёлочка непонятной высоты', function (assert) {
		assert.strictEqual(tree(null), null);
		assert.strictEqual(tree(undefined), null);
		assert.strictEqual(tree(Infinity),null);
		assert.strictEqual(tree(false),null);
		assert.strictEqual(tree(true),null);
		assert.strictEqual(tree(''),null);
		assert.strictEqual(tree('sdadas'),null);
		assert.strictEqual(tree(NaN),null);
		
	});

	QUnit.test('Елочка дробной высоты', function (assert) {
		assert.strictEqual(tree(1.5), null);

		const expectedWithHeightThree =
			' * \n' +
			'***\n' +
			' | \n';

		assert.strictEqual(tree(3.5), expectedWithHeightThree);

		const expectedWithHeightFive =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5.0),expectedWithHeightFive);

		const expectedWithHeightFour =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';

		assert.strictEqual(tree('4.7'),expectedWithHeightFour);
		
		assert.strictEqual(tree('-3.2'),null);
		
	});
});
