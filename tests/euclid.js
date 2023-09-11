'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test(
		'Функция должна правильно работать с одинаковыми числами',
		function (assert) {
			assert.strictEqual(euclid(9, 9, 9, 9, 9, 9), 9);
			assert.strictEqual(euclid(21, 21, 21), 21);
			assert.strictEqual(euclid(100, 100, 100, 100), 100);
			assert.strictEqual(euclid(25, 25, 25, 25, 25, 25, 25, 25), 25);
		}
	);

	QUnit.test(
		'Функция должна правильно работать с взаимопростыми числами',
		function (assert) {
			const a = [3, 23, 43, 53, 73, 103];
			assert.strictEqual(euclid(...a), 1);
			const b = [7, 17, 37, 47, 67, 97];
			assert.strictEqual(euclid(...b), 1);
			assert.strictEqual(euclid(...a.map((x, index) => b[index] * x)), 1);

			const temp = [2, 3, 5, 7, 11, 13, 17, 19, 23];
			assert.strictEqual(euclid(...temp), 1);
			assert.strictEqual(euclid(...temp.map((num) => num * num)), 1);
		}
	);

	QUnit.test(
		'Функция должна правильно обрабатывать некорректные данные',
		function (assert) {
			assert.throws(() => euclid(), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при отсутствии аргументов');

			assert.throws(() => euclid([1, 2, 3]), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при массиве на входе');
			assert.throws(() => euclid(20, 30, [1, 2, 3]), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при массиве на входе');

			assert.throws(() => euclid(2.4, 24, 2), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при не натуральном числе на входе');
			assert.throws(() => euclid(-20, 15, 10), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при не натуральном числе на входе');
			assert.throws(() => euclid(0, 1, 2, 3), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при не натуральном числе на входе');
			assert.throws(() => euclid(1000, Number.POSITIVE_INFINITY), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при не натуральном числе на входе');

			assert.throws(() => euclid('abcd'), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при строке на входе');
			assert.throws(() => euclid('23', 23), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при строке на входе');

			assert.throws(() => euclid(4, function(){}), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при функции на входе')

			assert.throws(() => euclid(3, 5, null, 8), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при null на входе')

			assert.throws(() => euclid(true), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при boolean на входе')
			assert.throws(() => euclid(false), new TypeError('expected sequence of natural numbers'), 'euclid() выбрасывает ошибку при boolean на входе')
		}
	);
	  
});
