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

  QUnit.test('Функция должна правильно работать с отрицательными числами(доп)', function (assert) {
    assert.strictEqual(euclid(-1, -1), 1, 'euclid(-1, -1) === 1');
    assert.strictEqual(euclid(-2, -2), 2, 'euclid(-2, -2) === 2');
    assert.strictEqual(euclid(-13, -13, -26), 13, 'euclid(-13, -13, -26) === 13');
    assert.strictEqual(euclid(-3, -7, -1), 1, 'euclid(-3, -7, -1) === 1');
    assert.strictEqual(euclid(-7, -7, -13), 1, 'euclid(-7, -7, -13) === 1');
    assert.strictEqual(euclid(-2, -14, -16), 2, 'euclid(-2, -14, -16) === 2');
    assert.strictEqual(euclid(-7, -14, -21), 7, 'euclid(-7, -14, -21) === 7');
    assert.strictEqual(euclid(-6006, -3738735, -51051), 3003, 'euclid(-6006, -3738735, -51051) === 3003');
 });

  QUnit.test('Функция должна правильно обрабатывать нулевые аргументы(доп)', function (assert) {
    assert.strictEqual(euclid(0, 0), 0, 'euclid(0, 0) === 0');
    assert.strictEqual(euclid(0, 5), 5, 'euclid(0, 5) === 5');
    assert.strictEqual(euclid(5, 0), 5, 'euclid(5, 0) === 5');
    assert.strictEqual(euclid(0, 0, 0), 0, 'euclid(0, 0, 0) === 0');
    assert.strictEqual(euclid(0, 0, 5), 5, 'euclid(0, 0, 5) === 5');
    assert.strictEqual(euclid(0, 5, 0), 5, 'euclid(0, 5, 0) === 5');
    assert.strictEqual(euclid(5, 0, 0), 5, 'euclid(5, 0, 0) === 5');
 });

  QUnit.test('Функция должна правильно обрабатывать одинаковые числа(доп)', function (assert) {
    assert.strictEqual(euclid(5, 5), 5, 'euclid(5, 5) === 5');
    assert.strictEqual(euclid(13, 13, 13), 13, 'euclid(13, 13, 13) === 13');
    assert.strictEqual(euclid(2, 2, 2, 2), 2, 'euclid(2, 2, 2, 2) === 2');
 });

  QUnit.test('Функция должна правильно находить НОД десятичных дробей(доп)', function (assert) {
   assert.strictEqual(euclid(1.5, 0.5), 0.5, 'euclid(1.5, 0.5) === 0.5');
   assert.strictEqual(euclid(0.3, 0.6), 0.3, 'euclid(0.3, 0.6) === 0.3');
   assert.strictEqual(euclid(2.5, 1.5, 7.5, 8.5), 0.5, 'euclid(2.5, 1.5, 7.5, 8.5) === 0.5');
   assert.strictEqual(euclid(0.25, 0.5, 0.75), 0.25, 'euclid(0.25, 0.5, 0.75) === 0.25');
});
  

  QUnit.test('Функция должна правильно обрабатывать некорректные данные(доп)', function (assert) {
    assert.throws(function() { euclid(); }, Error, 'euclid() бросает исключение при отсутствии аргументов');
    assert.throws(function() { euclid('abc'); }, Error, 'euclid("abc") бросает исключение при передаче некорректного аргумента');
    assert.throws(function() { euclid(null); }, Error, 'euclid(null) бросает исключение при передаче некорректного аргумента');
    assert.throws(function() { euclid(1, 1.5, 'abc'); }, Error, 'euclid(1, 1.5, "abc") должна бросить исключение');
    assert.throws(function() { euclid(1, '123', 'abc'); }, Error, 'euclid(1, "123", "abc") должна бросить исключение');
    assert.throws(function() { euclid(1, '123', 1); }, Error, 'euclid(1, "123", 1) должна бросить исключение');
    assert.throws(function() { euclid(1, 2, 'abc'); }, Error, 'euclid(1, 2, "abc") бросает исключение при передаче некорректного аргумента');
    assert.throws(function() { euclid(Infinity, 5); }, Error, 'euclid(Infinity, 5) бросает исключение при передаче значения Infinity');
    assert.throws(function() { euclid(-Infinity, 5); }, Error, 'euclid(-Infinity, 5) бросает исключение при передаче значения -Infinity');  
    assert.throws(function() { euclid(NaN, 10); }, Error, 'euclid(NaN, 10) бросает исключение при передаче значения NaN');
    assert.throws(function() { euclid(Number.MAX_VALUE + 1); }, Error, 'euclid(Number.MAX_VALUE + 1) бросает исключение при передаче максимально возможного числа + 1');
    assert.throws(function() { euclid(50 + 'Квартир'); }, Error, 'euclid(50 + "Квартир") бросает исключение при передаче выражения');
 });


  QUnit.test('Функция должна правильно обрабатывать большие числа(доп)', function (assert) {
    assert.strictEqual(euclid(1234567890, 9876543210), 90, 'euclid(1234567890, 9876543210) должна вернуть 90');
    assert.strictEqual(euclid(9999999999999999, 1111111111111111), 1, 'euclid(9999999999999999, 1111111111111111) должна вернуть 1');
    assert.strictEqual(euclid(9999999999999999, 2222222222222222), 2, 'euclid(9999999999999999, 2222222222222222) должна вернуть 2');
    assert.strictEqual(euclid(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1), 1, 'euclid(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1) должна вернуть 1');
 });

});
