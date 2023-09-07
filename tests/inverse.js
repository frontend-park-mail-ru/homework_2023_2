'use strict';

QUnit.module('Тестируем функцию inverse', function () {
    QUnit.test('Функция работает с пустым массивом', function (assert) {
        assert.deepEqual(inverse([]), []);
    });

    QUnit.test('Функция работает с массивом длины один', function (assert) {
        assert.deepEqual(inverse([1]), [1]);
        assert.deepEqual(inverse(['a']), ['a']);
        assert.deepEqual(inverse([null]), [null]);
        assert.deepEqual(inverse([false]), [false]);
    });

    QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
        assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
    });

    QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция корректно обрабатывает некорректный ввод массива', function (assert) {
        assert.strictEqual(inverse(null), "Arg1 is not an Array");
        assert.strictEqual(inverse({ a: 1, b: 2 }), "Arg1 is not an Array");
        assert.strictEqual(inverse(22), "Arg1 is not an Array");
        assert.strictEqual(inverse("abc"), "Arg1 is not an Array");
        assert.strictEqual(inverse(false), "Arg1 is not an Array");
    });

    QUnit.test('Функция корректно обрабатывает некорректный ввод отступа', function (assert) {
        assert.strictEqual(inverse([1, 2, 3], null), "Arg2 is not an Integer");
        assert.strictEqual(inverse([1, 2, 3], { a: 1, b: 2 }), "Arg2 is not an Integer");
        assert.strictEqual(inverse([14], Infinity), "Arg2 is not an Integer");
        assert.strictEqual(inverse([42, 21], "abc"), "Arg2 is not an Integer");
        assert.strictEqual(inverse(['a', 'b'], false), "Arg2 is not an Integer");
    });
});
