'use strict';

QUnit.module('Тестируем функцию plain', function () {
    QUnit.test('Работает c разными типами аргумента на входе(в т.ч без аргументов)', function (assert) {
        assert.deepEqual(plain(undefined), null);
        assert.deepEqual(plain(null), null);
        assert.deepEqual(plain(2), null);
        assert.deepEqual(plain("arg"), null);
        assert.deepEqual(plain(false), null);
        assert.deepEqual(plain({ 1: "1" }), null);
    });

    QUnit.test('Работает c произвольным числом аргументов разного типа', function (assert) {
        assert.deepEqual(plain(undefined, null), null);
        assert.deepEqual(plain(3, "str", 2), null);
        assert.deepEqual(plain({ 1: "1" }, [1, 2, 3]), null);
    });

    QUnit.test('Работает с единственным элементом', function (assert) {
        assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
        assert.deepEqual(plain([42]), [42], 'Работает с массивом из одного элемента');
        assert.deepEqual(plain([1, 2, 3, 4]), [1, 2, 3, 4], 'Сохраняет порядок элементов');
    });

    QUnit.test('Работает с единственным массивом', function (assert) {
        assert.deepEqual(plain([[]]), []);
        assert.deepEqual(plain([[42]]), [42]);
        assert.deepEqual(plain([[1, 2, 3, 4]]), [1, 2, 3, 4]);
    });

    QUnit.test('Работает с единственным массивом высокого уровня вложенности', function (assert) {
        assert.deepEqual(plain([[[[[[]]]]]]), []);
        assert.deepEqual(plain([[[42]]]), [42]);
        assert.deepEqual(plain([[[[1, 2, 3, 4]]]]), [1, 2, 3, 4]);
    });

    QUnit.test('Работает со смешанными значениями', function (assert) {
        assert.deepEqual(plain([[], 42]), [42]);
        assert.deepEqual(plain([[42], 0]), [42, 0]);
        assert.deepEqual(plain([[1, 2, 3, 4], 5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
    });

    QUnit.test('Работает со смешанными значениями, одно из значений содержит вложенные значения', function (assert) {
        assert.deepEqual(plain([[[[]]], 42]), [42]);
        assert.deepEqual(plain([[[42, 31]], 0]), [42, 31, 0]);
        assert.deepEqual(plain([[[0, 0, [[[[[[[0]]]]]]], [1, 2, 3, 4]], 5, 6, 7, 8]]), [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    QUnit.test('Работает со смешанными значениями, произвольное число вложенных значений', function (assert) {
        assert.deepEqual(plain([[[[]], []], 42, 53]), [42, 53]);
        assert.deepEqual(plain([[42], [[[0]], [[]]]]), [42, 0]);
        assert.deepEqual(plain([[1, 2, 3, 4], 5, 6, 7, 8, [9, 10], [[11], [[12], [[[13]]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });

    QUnit.test('Работает с несколькими массивами', function (assert) {
        assert.deepEqual(plain([[], []]), [], 'Работает с пустыми массивами');
        assert.deepEqual(plain([[42], [42]]), [42, 42]);
        assert.deepEqual(plain([[42, 42], [42]]), [42, 42, 42]);
        assert.deepEqual(plain([[1], [2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
    });

    QUnit.test('Работает с вложенными массивами', function (assert) {
        assert.deepEqual(plain([[], [[], [], []]]), [], 'Работает с пустыми массивами');
        assert.deepEqual(plain([[42], [[42], [], [42]], [42]]), [42, 42, 42, 42]);
        assert.deepEqual(plain([[42, 42], [42, [42, [42, 42], 42]]]), [42, 42, 42, 42, 42, 42, 42]);
        assert.deepEqual(plain([[1], [2], [3], [4, 5, [6, 7, 8, [9]], 10], 11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    QUnit.test('Работает с элементами разных типов', function (assert) {
        assert.deepEqual(plain([['abcde'], [['f'], [null, false], [NaN, NaN], NaN], -Infinity]), ['abcde', 'f', null, false, NaN, NaN, NaN, -Infinity]);
    });
    QUnit.test('Работает с элементами разных типов + undefined', function (assert) {
        assert.deepEqual(plain([['abcde'], [['f'], [null, false], [NaN, NaN], NaN], -Infinity, [undefined], [1, 2]]), ['abcde', 'f', null, false, NaN, NaN, NaN, -Infinity, undefined, 1, 2]);
    });
});
