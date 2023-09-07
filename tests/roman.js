'use strict';

QUnit.module('Тестируем функцию roman', function () {
    QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
        assert.strictEqual(roman('I'), 1, 'roman(\'I\') === 1');
        assert.strictEqual(roman('V'), 5, 'roman(\'V\') === 5');
        assert.strictEqual(roman('M'), 1000, 'roman(\'M\') === 1000');
        assert.strictEqual(roman('l'), 50, 'roman(\'l\') === 50');
        assert.strictEqual(roman('d'), 500, 'roman(\'d\') === 500');

        assert.strictEqual(roman('iv'), 4, 'roman(\'iv\') === 4');
        assert.strictEqual(roman('CM'), 900, 'roman(\'CM\') === 900');

        assert.strictEqual(roman('MCMIV'), 1904, 'roman(\'MCMIV\') === 1904');
        assert.strictEqual(roman('MCMXC'), 1990, 'roman(\'MCMXC\') === 1990');
        assert.strictEqual(roman('mmxvii'), 2017, 'roman(\'mmxvii\') === 1990');
    });

    //added tests
    QUnit.test('roman правильно определяет, что римское число было записано неверно', function (assert) {
        assert.strictEqual(roman('iiii'),
            'Your number iiii is incorrect or it is not a number!',
            'roman(\'iiii\') === Your number iiii is incorrect or it is not a number!');
        assert.strictEqual(roman('IVIII'),
            'Your number IVIII is incorrect or it is not a number!',
            'roman(\'IVIII\') === \'Your number IVIII is incorrect or it is not a number!');
        assert.strictEqual(roman('lmc'),
            'Your number lmc is incorrect or it is not a number!',
            'roman(\'lmc\') === Your number lmc is incorrect or it is not a number!');
    });

    QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
        assert.strictEqual(roman(1), 'I', 'roman(1) === \'I\'');
        assert.strictEqual(roman(5), 'V', 'roman(5) === \'V\'');
        assert.strictEqual(roman(1000), 'M', 'roman(1000) === \'M\'');
        assert.strictEqual(roman(50), 'L', 'roman(50) === \'L\'');
        assert.strictEqual(roman(500), 'D', 'roman(500) === \'D\'');

        assert.strictEqual(roman(4), 'IV', 'roman(4) === \'IV\'');
        assert.strictEqual(roman(900), 'CM', 'roman(900) === \'CM\'');

        assert.strictEqual(roman(1904), 'MCMIV', 'roman(1904) === \'MCMIV\'');
        assert.strictEqual(roman(1990), 'MCMXC', 'roman(1990) === \'MCMXC\'');
        assert.strictEqual(roman(2017), 'MMXVII', 'roman(2017) === \'MMXVII\'');
    });

    QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
        assert.strictEqual(roman('1904'), 'MCMIV', 'roman(\'1904\') === \'MCMIV\'');
        assert.strictEqual(roman('1990'), 'MCMXC', 'roman(\'1990\') === \'MCMXC\'');
        assert.strictEqual(roman('2017'), 'MMXVII', 'roman(\'2017\') === \'MMXVII\'');
    });

    //added tests
    QUnit.test('roman правильно определяет, что десятичное число было записано неверно,', function (assert) {
        assert.strictEqual(roman('01234'),
            'Your number 01234 is incorrect or it is not a number!',
            'roman(\'01234\') === Your number 01234 is incorrect or it is not a number!');
    });

    //added tests
    QUnit.test('roman правильно обрабатывает ошибки при непредсказуемом вводе', function (assert) {
        assert.strictEqual(roman([1, '2']),
            'Your number 1,2 is incorrect or it is not a number!',
            'roman([1, \'2\']) === Your number 1,2 is incorrect or it is not a number!');
        assert.strictEqual(roman(NaN),
            'Your number NaN is incorrect or it is not a number!',
            'roman(NaN) === Your number NaN is incorrect or it is not a number!');
        assert.strictEqual(roman(undefined),
            'Your number undefined is incorrect or it is not a number!',
            'roman(undefined) === Your number undefined is incorrect or it is not a number!');
        assert.strictEqual(roman(true),
            'Your number true is incorrect or it is not a number!',
            'roman(true) === Your number true is incorrect or it is not a number!');
        assert.strictEqual(roman(function (s) {return 1;}),
            'Your number function (s) {return 1;} is incorrect or it is not a number!',
            'roman(function (s) {return 1;}) === Your number function (s){return 1;} is incorrect or it is not a number!');
    });
});
