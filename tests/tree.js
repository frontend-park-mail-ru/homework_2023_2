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

	QUnit.test('Ёлочка высотой 10', function (assert) {
		const expected =
			'        *        \n' +
			'       ***       \n' +
			'      *****      \n' +
			'     *******     \n' +
			'    *********    \n' +
			'   ***********   \n' +
			'  *************  \n' +
			' *************** \n' +
			'*****************\n' +
			'        |        \n';
		assert.strictEqual(tree(10), expected);
		assert.strictEqual(tree('10'), expected);
	});

	QUnit.test('Ёлочка высотой 12', function (assert) {
		const expected =
			'          *          \n' +
			'         ***         \n' +
			'        *****        \n' +
			'       *******       \n' +
			'      *********      \n' +
			'     ***********     \n' +
			'    *************    \n' +
			'   ***************   \n' +
			'  *****************  \n' +
			' ******************* \n' +
			'*********************\n' +
			'          |          \n';
		assert.strictEqual(tree(12), expected);
		assert.strictEqual(tree('12'), expected);
	});

	QUnit.test('Невалидные входные данные', function (assert) {
		assert.throws(() => 
			tree("purpur"),
			new Error("Error: invalid value of height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(Infinity),
			new Error("Error: invalid value of height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(""),
			new Error("Error: invalid value of height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(3, 4),
			new Error("Error: invalid value of trunk height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(3, ""),
			new Error("Error: invalid value of trunk height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(3, Infinity),
			new Error("Error: invalid value of trunk height"),
			"Invalid value"
	    );

		assert.throws(() => 
			tree(3, "pewpew"),
			new Error("Error: invalid value of trunk height"),
			"Invalid value"
	    );
	});

	QUnit.test('Неправильный тип данных', function (assert) {
		assert.strictEqual(tree(false), null);
		assert.strictEqual(tree(null), null);
	});

	QUnit.test('Ёлочка высотой 5 и высотой ствола 2', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n' +
			'  |  \n';
		assert.strictEqual(tree(5, 2), expected);
		assert.strictEqual(tree('5', '2'), expected);
	});

	QUnit.test('Ёлочка высотой 8 и высотой ствола 4', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n' +
			'   |   \n' +
			'   |   \n' +
			'   |   \n';
		assert.strictEqual(tree(8, 4), expected);
		assert.strictEqual(tree('8', '4'), expected);
	});
});
