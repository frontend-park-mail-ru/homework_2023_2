'use strict';

import {euclid} from "../source/euclid.js";

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

    QUnit.test("Функция должна правильно работать с отрицательными аргументами", function (assert) {
        assert.strictEqual(euclid(1, -1, 1,), 1, "euclid(1, -1, 1) === 1");
        assert.strictEqual(euclid(1000, -10, 100,), 10, "euclid(1000, -10, 100) === 10");
        assert.strictEqual(euclid(-105, -25, -55), 5, "euclid(-105, -25, -55) === 5");
        assert.strictEqual(euclid(-6006, -3738735, -51051), 3003, "euclid(-6006, -3738735, -51051) === 3003");
    });

    QUnit.test('Функция должна правильно обрабатывать отсутствие аргументов', function (assert) {
        assert.throws(() => {
            euclid();
        }, Error, "euclid() должна выкинуть Error");
    });

    QUnit.test('Функция должна правильно работать с аргументами, которые не являются целыми числами', function (assert) {
        assert.throws(() => {
            euclid(2.23, 3.3);
        }, TypeError, "euclid(2.23, 3.3) должна выкинуть TypeError");
        assert.throws(() => {
            euclid(4, 4, 5, 1324, 124, NaN, 66);
        }, TypeError, "euclid(4, 4, 5, 1324, 124, NaN, 66) должна выкинуть TypeError");
        assert.throws(() => {
            euclid(4, "asdf");
        }, TypeError, "euclid(4, \"asdf\") должна выкинуть TypeError");
        assert.throws(() => {
            euclid("1234");
        }, TypeError, "euclid(\"1234\") должна выкинуть TypeError");
        assert.throws(() => {
            euclid(2.23, 3.3);
        }, TypeError, "euclid(2.23, 3.3) должна выкинуть TypeError");
        assert.throws(() => {
            euclid({a: "adsf"});
        }, TypeError, "euclid({a: \"adsf\"}) должна выкинуть TypeError");
        assert.throws(() => {
            euclid(Infinity, 2, 42);
        }, TypeError, "euclid(Infinity, 2, 42) должна выкинуть TypeError");
    });
});
