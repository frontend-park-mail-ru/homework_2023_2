'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
		// hand made test's
		assert.strictEqual(solve('(x + 4)*10 - 17', 5), 73);
		assert.strictEqual(solve('5*x*(x + 4)+10*x', 2), 80);
		assert.strictEqual(solve('((x + 1)*(x+5))*5', 10), 825);
		assert.strictEqual(solve('(((x)*5)+3)*10', 3), 180);
		assert.strictEqual(solve('x*5*2*3 + 5', 8), 245);
	});
// test for check error's
	QUnit.test('Проверка типа входных данных', function (assert) {
		const err = new TypeError('Введен некоретный тип входных данных!');
		assert.throws(() => {solve("x + 1", "1"); }, err, 'Возникла ожидаемая ошибка');
		assert.throws(() => {solve(); }, err, 'Возникла ожидаемая ошибка');
		assert.throws(() => {solve(1, 1); }, err, 'Возникла ожидаемая ошибка');
	});
	QUnit.test('Проверка отсутсвия x', function (assert) {
		assert.throws(() => {solve('y + 1', 1); }, new Error('Введено некоретное выражение!'), 'Возникла ожидаемая ошибка');
	});
	QUnit.test('Проверка некорретного выражения', function (assert) {
		assert.throws(() => {solve('Math.pow(2, 5) * x + 2', 1); }, new Error('Введено некоретное выражение!'),  'Возникла ожидаемая ошибка');
	});
	QUnit.test('проверка выражения не зависящего от "x"', function (assert) {
		assert.throws(() =>  {solve('1 + 1', 2); },  new Error('В выражениее отсутсвует x!'),  'Возникла ожидаемая ошибка');
	});

});
