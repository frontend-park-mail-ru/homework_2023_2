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

	QUnit.test('plainify работает правильно с массивами', function (assert) {
		const nested1 = {
			deep: {
				array: [7, 17, 28, 3, 5],
				object: {
					'isInvented': null
				}
			}
		};
 
		const plain1 = {
			'deep.array.0': 7,
			'deep.array.1': 17,
			'deep.array.2': 28,
			'deep.array.3': 3,
			'deep.array.4': 5,
			'deep.object.isInvented': null
		};
 
		assert.deepEqual(plainify(nested1), plain1);
 
		const nested2 = {
			deep: {
				array: [
					{
						types: {
							first: 'Number',
							second: 'String'
						}
					},
					{
						test: {
							task1: {
								isCorrect: true
							},
							task2: {
								availableMarks: [4, 5]
							}
						}
					}	
				],
				nested: {
					deeper: {
						length: 2,
						width: 5,
						description: 'pool'
					},
					size: 5
				}
			}
		};
 
		const plain2 = {
			'deep.array.0.types.first': 'Number',
			'deep.array.0.types.second': 'String',
			'deep.array.1.test.task1.isCorrect': true,
			'deep.array.1.test.task2.availableMarks.0': 4,
			'deep.array.1.test.task2.availableMarks.1': 5,
			'deep.nested.deeper.length': 2,
			'deep.nested.deeper.width': 5,
			'deep.nested.deeper.description': 'pool',
			'deep.nested.size': 5
		};
 
		assert.deepEqual(plainify(nested2), plain2);
	});
 
	QUnit.test('plainify работает правильно с undefined, Nan, null', function (assert) {
		const nested = {
			options: {
				name: undefined,
				size: NaN,
				isAvailable: {
					'forAdmin': true,
					'forUser': null
				}
			},
		};
 
		const plain = {
			'options.name': undefined,
			'options.size': NaN,
			'options.isAvailable.forAdmin': true,
			'options.isAvailable.forUser': null
		};
 
		assert.deepEqual(plainify(nested), plain);
	});
 
	QUnit.test('plainify работает правильно с пустым объектом', function (assert) {
		assert.deepEqual(plainify({}), {});
	});
 
	QUnit.test('plainify работает правильно с объектом Object.create(null)', function (assert) {
		const nested = Object.create(null);
		nested.a = Object.create(null);
		nested.a.b = 1;
 
		const plain = {
			'a.b': 1
		}
 
		assert.deepEqual(plainify(nested), plain);
	});
});
