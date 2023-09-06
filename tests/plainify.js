'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		assert.deepEqual(plainify({}), {});

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

		const nested3 = {
			foo: {
				bar: {
					arr: [0, 0, -5, 17],
					word: 'home',
					foo: 'have'
				},
				word: 'door' 
			},
			word: 'apple',
		};

		const plain3 = {
			'foo.bar.arr.0': 0,
			'foo.bar.arr.1': 0,
			'foo.bar.arr.2': -5,
			'foo.bar.arr.3': 17,
			'foo.bar.word': 'home',
			'foo.bar.foo': 'have',
			'foo.word': 'door',
			'word': 'apple'
		};

		assert.deepEqual(plainify(nested3), plain3);

		const nested4 = {
			lists: [
				{
					text: {
						count: 2,
						words: ['green', 'blue']
					}
				},
				{
					text: {
						count: 1,
						words: ['class']
					}
				}
			]
		};

		const plain4 = {
			'lists.0.text.count': 2,
			'lists.0.text.words.0': 'green',
			'lists.0.text.words.1': 'blue',
			'lists.1.text.count': 1,
			'lists.1.text.words.0': 'class'
		};

		assert.deepEqual(plainify(nested4), plain4);
	});
});
