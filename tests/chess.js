'use strict';

QUnit.module('Тестируем функцию chess', function () {
    QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
        assert.throws(() => chess(1), new RangeError("Не бывает доски с таким размером"));
        assert.throws(() => chess('1'), new RangeError("Не бывает доски с таким размером"));
    });

    QUnit.test('Шахматной доски с отрицательными сторонами не бывает', function (assert) {
        assert.throws(() => chess(-10), new RangeError("Не бывает доски с таким размером"));
        assert.throws(() => chess('-10'), new RangeError("Не бывает доски с таким размером"));
    });

    QUnit.test('Шахматной доски с нецелыми сторонами не бывает', function (assert) {
        assert.throws(() => chess(1.5), new TypeError('Ожидалось целое число'));
        assert.throws(() => chess('1.5'), new TypeError('Ожидалось целое число'));
    });

    QUnit.test('Нельзя передать слово вместо размера', function (assert) {
        assert.throws(() => chess('abcd'), new TypeError('Ожидалось число'));
        assert.throws(() => chess('10abcd'), new TypeError('Ожидалось число'));
    });

    //пустая строка кастится как 0, поэтому проходит проверку на isNan
    QUnit.test('Нельзя передать пустую строчку вместо размера', function (assert) {
        assert.throws(() => chess(' '), new RangeError("Не бывает доски с таким размером"));
    });

    QUnit.test('Нельзя передать объект вместо размера', function (assert) {
        assert.throws(() => chess(Math), new TypeError('Ожидалось число'));
    });

    //true кастится как 1, поэтому проходит проверку на isNan
    QUnit.test('Нельзя передать bool вместо размера', function (assert) {
        assert.throws(() => chess(true), new RangeError("Не бывает доски с таким размером"));
    });

    //null кастится как 0, поэтому проходит проверку на isNan
    QUnit.test('Нельзя передать null вместо размера', function (assert) {
        assert.throws(() => chess(null), new RangeError('Не бывает доски с таким размером'));
    });

    QUnit.test('Нельзя передать undefined вместо размера', function (assert) {
        assert.throws(() => chess(undefined), new TypeError('Ожидалось число'));
    });

    QUnit.test('Нельзя передать NaN вместо размера', function (assert) {
        assert.throws(() => chess(NaN), new TypeError('Ожидалось число'));
    });

    QUnit.test('Нельзя передать слишком большое значение', function (assert) {
        assert.throws(() => chess(123456789087654321), new RangeError("Размер доски превышает максимально возможный размер строки"));
        assert.throws(() => chess(Infinity), new RangeError("Размер доски превышает максимально возможный размер строки"));
    });

    QUnit.test('Шахматная доска 2 на 2', function (assert) {
        const expected =
            '* \n' +
            ' *\n';
        assert.strictEqual(chess(2), expected);
        assert.strictEqual(chess('2'), expected);
    });

    QUnit.test('Шахматная доска 3 на 3', function (assert) {
        const expected =
            '* *\n' +
            ' * \n' +
            '* *\n';
        assert.strictEqual(chess(3), expected);
        assert.strictEqual(chess('3'), expected);
    });

    QUnit.test('Шахматная доска 8 на 8', function (assert) {
        const expected =
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n' +
            '* * * * \n' +
            ' * * * *\n';
        assert.strictEqual(chess(8), expected);
        assert.strictEqual(chess('8'), expected);
    });

});
