'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
		assert.deepEqual(minmax('1.1.1.1.1'), [ undefined, undefined ]);
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1'), [ 1, 1 ]);
		assert.deepEqual(minmax('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmax('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmax('42'), [ 42, 42 ]);
		assert.deepEqual(minmax('.0'), [ .0, .0 ]);
		assert.deepEqual(minmax('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmax('.01'), [ .01, .01 ]);
		assert.deepEqual(minmax('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmax('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmax('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmax('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
		assert.deepEqual(minmax('-1e-3 -1e-2 -1e-1 -1e-0'), [ -1e-0, -1e-3 ]);
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
		assert.deepEqual(minmax('1 / qwerty / +10 - 2 -7'), [ -7, 10 ]);
	});

	QUnit.test('minmax корректно работает с разными типами данных', function (assert) {
		assert.deepEqual(minmax('" " 1 1e-2 2 3.4 [7]'), [ 1e-2 , 3.4] );
		assert.deepEqual(minmax('undefined NaN'), [ undefined, undefined ]);
	});
});
