'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('1 повторяющаяся группа, 1 индивидуальный символ', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
	});
	QUnit.test('Несколько групп', function (assert) {
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
	});
	QUnit.test('Много групп', function (assert) {
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
	QUnit.test('Не тот тип', function (assert) {
		assert.strictEqual(rle(10087), null);
	});
	QUnit.test('Нет повторений', function (assert) {
		assert.strictEqual(rle('ABC'), 'ABC');
	});
	QUnit.test('Повторяется через букву', function (assert) {
		assert.strictEqual(rle('ABCB'), 'ABCB');
	});
	QUnit.test('Цифры', function (assert) {
		assert.strictEqual(rle('2222224444'), '2644');
	});
	QUnit.test('Цифры', function (assert) {
		assert.strictEqual(rle('....---'), '.4-3');
	});
	QUnit.test('inf', function (assert) {
		assert.strictEqual(rle(null), null);
	});
	QUnit.test('null', function (assert) {
		assert.strictEqual(rle(Infinity), null);
	});
	QUnit.test('undefined', function (assert) {
		assert.strictEqual(rle(undefined), null);
	});
});
