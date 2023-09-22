'use strict';

QUnit.module('Тестируем функцию set', function () {
	QUnit.test('set работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		const object2 = {
			deep: {
				hested: {
					field: 42
				}
			}
		};

		const object3 = {
			deep: {
				hested: {
					foo: 'bar'
				}
			}
		};

		const object4 = {
			deep: null
		};

		assert.deepEqual(set({foo: 'bar'}, '.foo', 'baz'), {foo: 'baz'});
		assert.deepEqual(set(object, '.deep.hested.field', 42), object2);

		assert.deepEqual(set(object, '.deep.hested', {foo: 'bar'}), object3);
		assert.deepEqual(set(object, '.deep', null), object4);
	});

	QUnit.test('set изменяет переданный объект', function (assert) {
		const object = {
			foo: 'bar'
		};

		const object1 = {
			foo: 'baz'
		};

		const object2 = set(object, '.foo', 'baz');
		assert.deepEqual(object, object1);
		assert.deepEqual(object2, object1);
	});

	QUnit.test('set работает правильно c массивами', function (assert) {
		const object1 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const object2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new1 = {
			foo: [ 42, 2, 3 ],
			bar: [
				{foobar: '42'}
			]
		};

		const new2 = {
			foo: [ 1, 2, 3 ],
			bar: [
				{foobar: 'baz'}
			]
		};

		assert.deepEqual(set(object1, '.foo.0', 42), new1);
		assert.deepEqual(set(object2, '.bar.0.foobar', 'baz'), new2);
	});

	QUnit.test('set работает правильно c объектами без свойств', function (assert) {
		const object = {
			deep: {
				nested: {
					field: null
				}
			}
		};

		assert.deepEqual(set({}, '.deep.nested.field', null), object);
	});
	
	QUnit.test('set работает с пустыми и недостаточно большими массивами', function (assert) {
		const object = [
			33
		];
		const object2 = [
			undefined,
			undefined,
			undefined,
			33
		];
		const object3 = [
			1,
			undefined,
			undefined,
			33
		];

		assert.deepEqual(set([], '.0', 33), object);
		assert.deepEqual(set([], '.3', 33), object2);
		assert.deepEqual(set([1], '.3', 33), object3);
	});
	
	QUnit.test('set throws an error when path is not a string', function (assert) {
		assert.throws(function() {
			set({}, 123, 'value');
		}, Error, 'Path argument must be a string');
		
		assert.throws(function() {
			set({}, {}, 'value');
		}, Error, 'Path argument must be a string');
		
		assert.throws(function() {
			set({123 : 2}, {123 : 123}, 'value');
		}, Error, 'Path argument must be a string');

		assert.throws(function() {
			set({}, true, 'value');
		}, function(error) {
			return error instanceof Error && error.message === 'Path argument must be a string';
		}, 'Path argument must be a string');
    });
	
	QUnit.test('set throws error when obj argument is not an object', function (assert) {
		assert.throws(function() {
			set('not object', '.123', 'value');
		}, function(error) {
			return error instanceof Error && error.message === 'obj argument must be an object';
		}, 'obj argument must be an object');
    });
	
	QUnit.test('set throws error when value of type that should not be a dict value', function (assert) {
		assert.throws(function() {
			set({123 : 1}, '.123', function(){});
		}, function(error) {
			return error instanceof Error && error.message === 'value argument cannot be function, symbol or undefined';
		}, 'value argument cannot be function, symbol or undefined');
    });
	
});
