'use strict';


QUnit.module('Тестируем функцию window.euclidGlobal', function () {
    QUnit.test('На входе всего одно число', function (assert) {
        assert.strictEqual(window.euclidGlobal(1), 1, 'window.euclidGlobal(1) === 1');
        assert.strictEqual(window.euclidGlobal(2), 2, 'window.euclidGlobal(2) === 2');
        assert.strictEqual(window.euclidGlobal(7), 7, 'window.euclidGlobal(7) === 7');
        assert.strictEqual(window.euclidGlobal(6006), 6006, 'window.euclidGlobal(6006) === 6006');
    });

    QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
        assert.strictEqual(window.euclidGlobal(1, 1, 1), 1, 'window.euclidGlobal(1, 1, 1) === 1');
        assert.strictEqual(window.euclidGlobal(2, 2, 2), 2, 'window.euclidGlobal(2, 2, 2) === 2');
        assert.strictEqual(window.euclidGlobal(13, 13, 26), 13, 'window.euclidGlobal(13, 13, 26) === 13');
        assert.strictEqual(window.euclidGlobal(3, 7, 1), 1, 'window.euclidGlobal(3, 7, 1) === 1');
        assert.strictEqual(window.euclidGlobal(7, 7, 13), 1, 'window.euclidGlobal(7, 7, 13) === 1');
        assert.strictEqual(window.euclidGlobal(2, 14, 16), 2, 'window.euclidGlobal(2, 14, 16) === 2');
        assert.strictEqual(window.euclidGlobal(7, 14, 21), 7, 'window.euclidGlobal(7, 14, 21) === 7');
        assert.strictEqual(window.euclidGlobal(6006, 3738735, 51051), 3003, 'window.euclidGlobal(6006, 3738735, 51051) === 3003');
    });

    QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
        assert.strictEqual(window.euclidGlobal(1, 1, 1, 1, 1, 1, 1), 1);

        const n = 17;
        assert.strictEqual(window.euclidGlobal(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

        const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
        assert.strictEqual(window.euclidGlobal(...[...temp, ...temp, ...temp, ...temp, ...temp]), window.euclidGlobal(...temp));
    });

    QUnit.test("Функция должна правильно работать с отрицательными аргументами", function (assert) {
        assert.strictEqual(window.euclidGlobal(1, -1, 1,), 1, "window.euclidGlobal(1, -1, 1) === 1");
        assert.strictEqual(window.euclidGlobal(1000, -10, 100,), 10, "window.euclidGlobal(1000, -10, 100) === 10");
        assert.strictEqual(window.euclidGlobal(-105, -25, -55), 5, "window.euclidGlobal(-105, -25, -55) === 5");
        assert.strictEqual(window.euclidGlobal(-6006, -3738735, -51051), 3003, "window.euclidGlobal(-6006, -3738735, -51051) === 3003");
    });

    QUnit.test('Функция должна правильно обрабатывать отсутствие аргументов', function (assert) {
        assert.throws(() => {
            window.euclidGlobal();
        }, Error, "window.euclidGlobal() должна выкинуть Error");
    });

    QUnit.test('Функция должна правильно работать с аргументами, которые не являются целыми числами', function (assert) {
        assert.throws(() => {
            window.euclidGlobal(2.23, 3.3);
        }, Error, "window.euclidGlobal(2.23, 3.3) должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal(4, 4, 5, 1324, 124, NaN, 66);
        }, Error, "window.euclidGlobal(4, 4, 5, 1324, 124, NaN, 66) должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal(4, "asdf");
        }, Error, "window.euclidGlobal(4, \"asdf\") должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal("1234");
        }, Error, "window.euclidGlobal(\"1234\") должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal(2.23, 3.3);
        }, Error, "window.euclidGlobal(2.23, 3.3) должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal({a: "adsf"});
        }, Error, "window.euclidGlobal({a: \"adsf\"}) должна выкинуть Error");
        assert.throws(() => {
            window.euclidGlobal(Infinity, 2, 42);
        }, Error, "window.euclidGlobal(Infinity, 2, 42) должна выкинуть Error");
    });
});
