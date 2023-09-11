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
		assert.deepEqual(plain([ [ {id: 1, name: 'Gleb'}, {id: 2, age: 19n, mass: [1, 2 ,3]} ], {0: 10}, [ [ [ null ] ] ] ]),
		 [ {id: 1, name: 'Gleb'}, {id: 2, age: 19n, mass: [1, 2 ,3]}, {0: 10}, null ], 'Работает с элементами тима object');
		assert.deepEqual(plain([ {id: [1, 2, [3, 4] ]} ]), [ {id: [1, 2, [3, 4] ]} ]);
	});

	QUnit.test('Тестирование работы с иными типами данных, в случае невалидные входных данные должна быть ошибка TypeError',
	function (assert) {
		assert.throws(() => (plain(undefined), TypeError));
		assert.throws(() => (plain(5), TypeError));
		assert.throws(() => (plain(9999n), TypeError));
		assert.throws(() => (plain(true), TypeError));
		assert.throws(() => (plain('alert("true")'), TypeError));
		assert.throws(() => (plain(Symbol("id")), TypeError));
		assert.throws(() => (plain(Math), TypeError));
		assert.throws(() => (plain(null), TypeError));
		assert.throws(() => (plain(alert('alert')), TypeError));
		assert.throws(() => (plain(NaN), TypeError));
		assert.throws(() => (plain( {} ), TypeError));
		assert.throws(() => (plain( '' ), TypeError));
		assert.throws(() => (plain( {id: 1, name: 'Gleb', data: [null, 10n, 10n, 3]} ), TypeError));
	});
});