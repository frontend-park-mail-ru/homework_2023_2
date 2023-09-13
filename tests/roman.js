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
		assert.strictEqual(roman(new String('123')), 'CXXIII');
	});

	QUnit.test('roman правильно определяет римские числа', function (assert) {
		assert.strictEqual(roman('MCMLxxXIV'), 1984);
		assert.strictEqual(roman('mmXII'), 2012);
		assert.strictEqual(roman('VIIII'), 9);
		assert.strictEqual(roman('XIIII'), 14);
		assert.strictEqual(roman('XXVIIII'), 29);
		assert.strictEqual(roman('MMMCMXCIX'), 3999);
		assert.strictEqual(roman(new String('VIIII')), 9);
	});

	QUnit.test('roman правильно определяет неправильные данные', function (assert) {
		assert.throws(() => { roman('56pp');}, Error("invalid input"));
		assert.throws(() => { roman('77&&');}, Error("invalid input"));
		assert.throws(() => { roman('***');}, Error("invalid input"));
		assert.throws(() => { roman('UUU');}, Error("invalid input"));
		assert.throws(() => { roman('MMA');}, Error("invalid input"));
		assert.throws(() => { roman('asd');}, Error("invalid input"));

		assert.throws(() => { roman('DM');}, Error("invalid input"));
		assert.throws(() => { roman('id');}, Error("invalid input"));
		assert.throws(() => { roman('DDDDD');}, Error("invalid input"));
		assert.throws(() => { roman('VL');}, Error("invalid input"));
		assert.throws(() => { roman('MMMM');}, Error("invalid input"));
		
		assert.throws(() => { roman('');}, Error("invalid input"));
		assert.throws(() => { roman([]);}, Error("invalid input"));
		assert.throws(() => { roman({});}, Error("invalid input"));
		assert.throws(() => { roman(true);}, Error("invalid input"));
		assert.throws(() => { roman(false);}, Error("invalid input"));
	});
});
