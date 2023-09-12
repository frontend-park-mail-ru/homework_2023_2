'use strict';


QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
	});

	QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
	});

	QUnit.test('Свои тесты', function (assert) {
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
		assert.strictEqual(roman(20), 'XX');
		assert.strictEqual(roman(new Number(1)), 'I');
		assert.strictEqual(roman(new Number(1) + 3), 'IV');
		assert.strictEqual(roman(new String("XX")), 20);

		assert.throws(function() {roman('VK-Park')}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman('4000')}, Error, "Invalid number value");
		assert.throws(function() {roman(0)}, Error, "Invalid number value");
		assert.throws(function() {roman(9.7)}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman("9.7")}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman([1])}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(null)}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(-123)}, Error, "Invalid number value");
		assert.throws(function() {roman("")}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman()}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(undefined)}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(NaN)}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(125/32)}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman("Привет мир!!")}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman("    ")}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(":)")}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman("-123")}, Error, "Invalid number value");
		assert.throws(function() {roman(new String(""))}, TypeError, "Invalid data or data type");
		assert.throws(function() {roman(new Number(4001))}, Error, "Invalid number value");
	});
});

