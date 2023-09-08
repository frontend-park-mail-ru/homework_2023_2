'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
		assert.strictEqual(rle(), '');
		assert.strictEqual(rle(''), '');
		assert.strictEqual(rle('C'), 'C');
		assert.strictEqual(rle('44455788'), '4352782');
		assert.strictEqual(rle('///**--+?'), '/3*2-2+?');
	});
});
