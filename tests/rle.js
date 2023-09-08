'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle('ABCDE'), 'ABCDE');
		assert.strictEqual(rle(''), '');
		assert.throws(() => {rle(1)});
		assert.throws(() => {rle(['ABCDE'])});
		assert.throws(() => {rle(null)});
		assert.throws(() => {rle(undefined)});
	});
});
