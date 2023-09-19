'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'}
		];
		const actual = sorting(initial, [ 'id', 'prop1' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});

  QUnit.test('sorting сортирует массив, если у объектов разное количество свойств, но есть переданые', function (assert) {
		const initial = [
			{prop1: '3000'},
			{prop1: '1000', prop2: '2000'},
			{prop1: '4'},
			{prop1: '200'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

    const expected = [
      {prop1: '1000', prop2: '2000'},
			{prop1: '200'},
			{prop1: '3000'},
			{prop1: '4'},
		];
		assert.deepEqual(actual, expected);
	});

  QUnit.test('sorting выбрасывает ошибку, если у какого-то объекта остуствует переданное свойство', function (assert) {
		assert.throws(() => {
			const initial = [
				{prop1: '3000'},
				{prop2: '1000'},
				{prop1: '4'},
				{prop3: '200'}
			];
			sorting(initial, [ 'prop1' ]);
		}, TypeError("Some element of plain array 'item' hasn't name 'key' from name array"))
	});

  QUnit.test('sorting выбрасывает ошибку, если значения одних и тех же свойств имеют различные типы', function (assert) {
		assert.throws(() => {
			const initial = [
				{prop1: '3000'},
				{prop1: 1000},
				{prop1: '4'},
				{prop1: true}
			];
			sorting(initial, [ 'prop1' ]);
		}, TypeError("Plain array has different type item of same name objects"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			sorting(9, [ 'prop1' ]);
		}, TypeError("Wrong input"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			const initial = [
				{prop1: '30'},
				{prop1: '1000'},
				{prop1: '4'},
				{prop1: '200'}
			];
			sorting(initial, null);
		}, TypeError("Wrong input"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			const initial = String('Not array');
			sorting(initial, ['null']);
		}, TypeError("Wrong input"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			const initial = [
				String('It is string'),
				String('It is string'),
				String('It is string'),
				String('It is string')
			];
			sorting(initial, ['prop1']);
		}, TypeError("Wrong input"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			const initial = [
				{prop1: '30'},
				{prop1: '1000'},
				{prop1: '4'},
				{prop1: '200'}
			];
			sorting(initial, String('null'));
		}, TypeError("Wrong input"))
	});

	QUnit.test('sorting выбрасывает ошибку, если у входных параметров неправильный тип данных', function (assert) {
		assert.throws(() => {
			sorting(null, ['null']);
		}, TypeError("Wrong input"))
	});
});




