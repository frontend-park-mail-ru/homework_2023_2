'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('\t\n  \v \t  \n \t'), [ undefined, undefined ], 'Строка из пробельных символов');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
		assert.deepEqual(minmax('tekst na angliskom'), [ undefined, undefined ]);
		assert.deepEqual(minmax('NaN nan Nan nAn naN'), [ undefined, undefined ], 'Игнорирует строку "NaN"');
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
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
	});
	
	QUnit.test('minmax работает с наличием эмодзи в строке', function (assert) {
		assert.deepEqual(minmax('23👨‍👩‍👦‍👦👨‍👩‍👧‍👦32 👨‍👦‍👦👩‍👦0.2'), [ 0.2, 32 ]);
		assert.deepEqual(minmax(' 😁 эмодзи!!! 2😎  1😴😴  В!;^^ -5⛷🧠 .32e2 СтРокЕ--!!!🔮❤000💥💥💥💥💥💥💥'), [ -5, .32e2 ]);
	});
	
	QUnit.test('minmax игнорирует числа, которые стоят вплотную к словам', function (assert) {
		assert.deepEqual(minmax('1 2 3 4 число100 не_число-100'), [ 1, 4 ]);
		assert.deepEqual(minmax('1 2 3 4 100буквы_после 100ещебуквы'), [ 1, 4 ]);
		assert.deepEqual(minmax('1 2 3 4 буквы_до100 100и_после'), [ 1, 4 ]);
	});
});
