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

	QUnit.test('plainify работает правильно с null вместо объекта', function (assert) {
		assert.deepEqual(plainify(null), null);
	});

	QUnit.test('plainify работает правильно с array вместо объекта', function (assert) {
		assert.deepEqual(plainify([1, 2, 3]), [1, 2, 3]);
	});
	
	QUnit.test('plainify работает правильно с undefined вместо объекта', function (assert) {
		assert.deepEqual(plainify(undefined), undefined);
	});

	QUnit.test('plainify работает правильно с NaN вместо объекта', function (assert) {
		assert.deepEqual(plainify(NaN), NaN);
	})

	QUnit.test('plainify работает правильно с null и array', function (assert) {
		const nested = {
			a: {
				b: [1, 2, 3],
				c: {
					'd': null
				}
			}
		};

		const plain = {
			'a.b': [1, 2, 3],
			'a.c.d': null
		};

		assert.deepEqual(plainify(nested), plain);
	})
});
