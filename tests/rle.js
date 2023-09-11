'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('ABCDE'), 'ABCDE');
		assert.strictEqual(rle(''), '');
	});
	QUnit.test('Ошибки при неправильном типе данных', function (assert) {
		assert.throws(() => {rle(1)}, TypeError, 'number');
		assert.throws(() => {rle(['ABCDE'])}, TypeError, 'object');
		assert.throws(() => {rle(null)}, TypeError, 'null');
		assert.throws(() => {rle(undefined)}, TypeError, 'undefined');
		assert.throws(() => {rle(true)}, TypeError, 'boolean');
		assert.throws(() => {rle(NaN)}, TypeError, 'NaN');
		assert.throws(() => {rle(Infinity)}, TypeError, 'Infinity');
	});
});
