'use strict';

import {euclid} from "../source/euclid"

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

        const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
        assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
    });

    QUnit.test('Функция должна правильно обрабатывать отсутствие аргументов', function (assert) {
        assert.deepEqual(euclid(), NaN, "euclid() должна вернуть NaN");
    });

    QUnit.test('Функция должна правильно работать с аргументами, которые не являются целыми числами', function (assert) {
        assert.deepEqual(euclid(2.23, 3.3), NaN, "euclid(2.23, 3.3) должна вернуть NaN");
        assert.deepEqual(euclid(NaN, 3.3), NaN, "euclid(NaN, 3.3) должна вернуть NaN");
        assert.deepEqual(euclid(4, 4, 5, 1324, 124, NaN, 66), NaN, "euclid(4, 4, 5, 1324, 124, NaN, 66) должна вернуть NaN");
        assert.deepEqual(euclid(4, "asdf"), NaN, "euclid(4, \"asdf\") должна вернуть NaN");
        assert.deepEqual(euclid("1234"), NaN, "euclid(\"1234\") должна вернуть NaN");
        assert.deepEqual(euclid({a: "adsf"}), NaN, "euclid({a: \"adsf\"}) должна вернуть NaN");
        assert.deepEqual(euclid(Infinity, 2, 42), NaN, "euclid( Infinity, 2, 42) должна вернуть NaN");
    });
});
