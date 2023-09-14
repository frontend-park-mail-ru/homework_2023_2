'use strict';

QUnit.module('Тестируем функцию plain', function () {
	QUnit.test('Работает с единственным элементом', function (assert) {
		assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([ 42 ]), [ 42 ], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([ [] ]), []);
		assert.deepEqual(plain([ [ 42 ] ]), [ 42 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ] ]), [ 1, 2, 3, 4 ]);
	});

	QUnit.test('Работает со смешанными значениями', function (assert) {
		assert.deepEqual(plain([ [], 42 ]), [ 42 ]);
		assert.deepEqual(plain([ [ 42 ], 0 ]), [ 42, 0 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ], 5, 6, 7, 8 ]), [ 1, 2, 3, 4, 5, 6, 7, 8 ]);
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([ [], [] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ 42 ] ]), [ 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42 ] ]), [ 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, 6 ] ]), [ 1, 2, 3, 4, 5, 6 ]);
	});

	QUnit.test('Работает с вложенными массивами', function (assert) {
		assert.deepEqual(plain([ [], [ [], [], [] ] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ [ 42 ], [], [ 42 ] ], [ 42 ] ]), [ 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42, [ 42, [ 42, 42 ], 42 ] ] ]), [ 42, 42, 42, 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, [ 6, 7, 8, [ 9 ] ], 10 ], 11 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
	});

	QUnit.test('Работает с элементами разных типов', function (assert) {
		assert.deepEqual(plain([ [ 'abcde' ], [ [ 'f' ], [ null, false ], [ NaN, NaN ], NaN ], -Infinity ]), [ 'abcde', 'f', null, false, NaN, NaN, NaN, -Infinity ]);
	});

	QUnit.test('Работает с пустыми массивами', function (assert) {
		assert.deepEqual(plain([ [], [], [] ]), []);
		assert.deepEqual(plain([ [ [ [ [] ] ] ] ]), []);
		assert.deepEqual(plain([ [ [] ], [ [] ] ]), []);
	});

	QUnit.test('Вложенные массивы из одного элемента', function (assert) {
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ] ]), [ 1, 2, 3 ]);
		assert.deepEqual(plain([ [ [] ], [ NaN ], [ 's' ] ]), [ NaN, 's' ]);
	});

	QUnit.test('Сохраняет порядок в вложенных массивах', function (assert) {
		assert.deepEqual(plain([ [ [ [ [ [ 1 ], 2 ], 3 ], 4 ], 5 ], 6 ]), [ 1, 2, 3, 4, 5, 6 ]);
		assert.deepEqual(plain([ [ [ [ [ [ 1 ], NaN ], Infinity ], -Infinity ], Math.max ], true ]), [ 1, NaN, Infinity, -Infinity, Math.max, true ]);
	});

	QUnit.test('Сохраняет порядок в вложенных массивах (другой порядок обхода)', function (assert) {
		assert.deepEqual(plain([ [1, 2, 3, [4, 5, 6, [7, 8, 9, [10] ] ] ] ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
		assert.deepEqual(plain([ [NaN, Infinity, -Infinity, [true, false, null, [undefined, 8, 9, ['string'] ] ] ] ]), [ NaN, Infinity, -Infinity, true, false, null, undefined, 8, 9, 'string' ]);
	});

	QUnit.test('Обрабатывает неправильные аргументы', function (assert) {
		assert.throws(() => plain('string'), TypeError);
		assert.throws(() => plain(NaN), TypeError);
		assert.throws(() => plain(12.635), TypeError);
		assert.throws(() => plain(() => NaN), TypeError);
		assert.throws(() => plain(true), TypeError);
		assert.throws(() => plain(false), TypeError);
		assert.throws(() => plain('saaaaad but true'), TypeError);
		assert.throws(() => plain({name: 1, years: 'Ivanov'}), TypeError);
	});
});
