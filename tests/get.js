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

	QUnit.test('get правильно работает с невалидными символами', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, ' '), undefined);
		assert.strictEqual(get(object, '   '), undefined);
		assert.strictEqual(get(object, '...'), undefined);
		assert.strictEqual(get(object, '.^.^.^'), undefined);
		assert.strictEqual(get(object, '.foo.*'), undefined);
	});

	QUnit.test('get правильно работает с undefined', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.throws(function() {
			get(object);
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get();
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get(object, undefined);
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get(undefined, '.foo');
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get(undefined, undefined);
		}, new TypeError("Invalid argument type"));
	});

	QUnit.test('get правильно работает с null', function (assert) {
		const obj2 = {
			foo: null
		}
		assert.strictEqual(get(obj2, '.foo.0'), undefined);

		assert.throws(function() {
			get(null, '.foo');
		}, new TypeError("Invalid argument type"));
		
		assert.throws(function() {
			get(obj2, null);
		}, new TypeError("Invalid argument type"));
	});

	QUnit.test('get правильно работает с аргументами других типов', function (assert) {
		const object = {
			arr: [ 1, 2, 3 ]
		};

		assert.throws(function() {
			get(object, 10);
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get(true, true);
		}, new TypeError("Invalid argument type"));

		assert.throws(function() {
			get(object, false);
		}, new TypeError("Invalid argument type"));
		
		assert.throws(function() {
			get(false, false);
		}, new TypeError("Invalid argument type"));
	});

	QUnit.test('get правильно работает с объектами, имеющими прототипы', function (assert) {
		const objectPrototype = {
			val: 10,
			flag : true
		};

		const object = {
			arr: [ 1, 2, 3 ]
		};
		
		Object.setPrototypeOf(object, objectPrototype);

		assert.strictEqual(get(object, '.arr.1'), 2);
		assert.strictEqual(get(object, '.val'), undefined);
		assert.strictEqual(get(object, '.flag'), undefined);

		const needPrototypeProps = true;
		assert.strictEqual(get(object, '.arr.1', needPrototypeProps), 2);
		assert.strictEqual(get(object, '.val', needPrototypeProps), 10);
		assert.strictEqual(get(object, '.flag', needPrototypeProps), true);
	});
});
