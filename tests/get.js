'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [ 1, 2, 3 ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
	});

	QUnit.test('get работает правильно без передачи аргументов', function (assert) {
		const err = new TypeError("Invalid object argument type");
		assert.throws(function() { get(); }, err);
	});

	QUnit.test('get работает правильно с false-type аргументами', function (assert) {
		const errForWrongObject= new TypeError('Invalid object argument type');
		const errForWrongQuery = new TypeError('Invalid query argument type');
		const query = '.foo';
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.throws(function() { get(undefined, query); }, errForWrongObject);
		assert.throws(function() { get(null, query); }, errForWrongObject);
		assert.throws(function() { get(false, query) }, errForWrongObject);

		assert.throws(function() { get(object, null); }, errForWrongQuery);
		assert.throws(function() { get(object, false); }, errForWrongQuery);
		assert.throws(function() { get(object, undefined); }, errForWrongQuery);
	});

	QUnit.test('get работает правильно с методами прототипов', function (assert) {
		const metaObj = { name: 'Прародитель всех объектов', print: () => {console.log('Печать')} };
		function Object() {
			this.name = "Объект";
			this.price = 9999;
		}
		Object.prototype = metaObj;
		const obj = {};

		assert.strictEqual(get(obj, '.print'), undefined);
	});

	QUnit.test('get работает правильно с перечисляемыми свойствами прототипов при передаче соответствующей опции', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};
		const b = {b: 'b'};
		Object.setPrototypeOf(object, b);

		assert.strictEqual(get(object, '.b'), undefined);
		assert.strictEqual(get(object, '.b', undefined), undefined);
		assert.strictEqual(get(object, '.b', null), undefined);
		assert.strictEqual(get(object, '.b', true), object.b);
	});
});
