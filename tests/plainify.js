'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('plainify возвращает TypeError, если в качестве аргумента - не объект или null', function (assert) {
		assert.deepEqual(plainify(null), TypeError);
		assert.deepEqual(plainify(undefined), TypeError);
		assert.deepEqual(plainify(NaN), TypeError);
		assert.deepEqual(plainify('helloworld'), TypeError);
	});

	QUnit.test('plainify работает правильно с array', function (assert) {
		const nested = {
			a: {
				b: [1, 2, 3],
				c: {
					'd': null
				}
			}
		};

		const plain = {
			'a.b.0': 1,
			'a.b.1': 2,
			'a.b.2': 3,
			'a.c.d': null
		};

		assert.deepEqual(plainify(nested), plain);
	})

	
	QUnit.test('plainify воспринимает null как значение, а не объект', function (assert) {
		const nested = {
			a: {
				b: undefined,
				c: {
					'd': null
				}
			},
			d: null
		};

		const plain = {
			'a.b': undefined,
			'a.c.d': null,
			'd': null
		};

		assert.deepEqual(plainify(nested), plain);
	})
});
