'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('работает правильно c простыми объектами', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});
		assert.deepEqual(plainify({}), {});
	});

	QUnit.test('работает правильно с вложенными объектами', function (assert) {
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

	QUnit.test('работает правильно с вложенными массивами', function (assert) {
		const nested1 = {
			foo: {
				arr: [0, 0, -5, 17],
				word: 'apple'
			}
		};
		const plain1 = {
			'foo.arr.0': 0,
			'foo.arr.1': 0,
			'foo.arr.2': -5,
			'foo.arr.3': 17,
			'foo.word': 'apple',
		};
		assert.deepEqual(plainify(nested1), plain1);
		
		const nested2 = {
			lists: [
				{
					text: {
						words: ['green', 'blue']
					}
				},
				{
					text: {
						words: ['class']
					}
				}
			]
		};
		const plain2 = {
			'lists.0.text.words.0': 'green',
			'lists.0.text.words.1': 'blue',
			'lists.1.text.words.0': 'class'
		};
		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('работает правильно при повторении свойсв вложенными объектами', function (assert) {
		const nested = {
			foo: {
				foo: {
					foo: {
						foo: 1
					}
				}
			}
		};
		const plain = {
			'foo.foo.foo.foo': 1
		};
		assert.deepEqual(plainify(nested), plain);
	});

	QUnit.test('работает правильно при специальных значениях вложенных свойств', function (assert) {
		const nested = {
			foo: {
				field1: null,
				field2: undefined,
				field3: Infinity,
				field4: 'string',
				field5: {}
			},
			word: 'car'
		};
		const plain = {
			'foo.field1': null,
			'foo.field2': undefined,
			'foo.field3': Infinity,
			'foo.field4': 'string',
			'word': 'car'
		};
		assert.deepEqual(plainify(nested), plain);
	});

	QUnit.test('выбрасывает исключение при передаче в функцию не объекта', function (assert) {
		assert.throws(()=>{plainify('row')}, TypeError);
		assert.throws(()=>{plainify(0)}, TypeError);
		assert.throws(()=>{plainify(null)}, TypeError);
		assert.throws(()=>{plainify(undefined)}, TypeError);
		assert.throws(()=>{plainify(Infinity)}, TypeError);
		assert.throws(()=>{plainify(NaN)}, TypeError);
		assert.throws(()=>{plainify(new String())}, TypeError);
		assert.throws(()=>{plainify(new Array())}, TypeError);
		assert.throws(()=>{plainify(Math)}, TypeError);
	});
});
