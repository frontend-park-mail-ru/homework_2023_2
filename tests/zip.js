'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({ answer: 42 }), { answer: 42 });
		assert.deepEqual(zip({ name: 'Georg' }), { name: 'Georg' });
		const obj = {
			count: 0,
			cost: '120$',
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test(
		'Функция работает с объектами среди которых есть объекты без свойств',
		function (assert) {
			assert.deepEqual(zip({}, {}), {});
			assert.deepEqual(zip({ answer: 42 }, {}), { answer: 42 });
			assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
			assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
			assert.deepEqual(zip({}, {}, {}, { name: 'Georg' }), {
				name: 'Georg',
			});

			const obj = {
				count: 0,
				cost: '120$',
			};
			assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
		}
	);

	QUnit.test(
		'Функция работает с объектами со свойствами с разными именами',
		function (assert) {
			const obj = {
				count: 0,
				cost: '120$',
			};

			assert.deepEqual(zip({ count: 0 }, { cost: '120$' }), obj);

			const obj2 = {
				a: 1,
				b: 2,
				c: null,
				d: 4,
				e: 5,
			};
			assert.deepEqual(
				zip({ a: 1 }, { b: 2 }, { c: null }, { d: 4 }, { e: 5 }),
				obj2
			);

			const obj3 = {
				name: 'age',
				value: 42,
			};

			const obj4 = {
				prop: false,
				attr: null,
			};

			const obj5 = {
				name: 'age',
				value: 42,
				prop: false,
				attr: null,
			};

			assert.deepEqual(zip(obj3, obj4), obj5);
		}
	);

	QUnit.test(
		'Функция правильно работает со свойствами, которые встречаются в нескольких объектах',
		function (assert) {
			assert.deepEqual(
				zip({ answer: 42 }, { answer: false }),
				{ answer: 42 },
				'Значение должно браться из первого встретившегося поля'
			);
			assert.deepEqual(zip({ age: 5 }, {}, { age: 4 }, { age: 72 }), {
				age: 5,
			});

			const obj = {
				name: 'age',
				value: 42,
			};
			assert.deepEqual(
				zip(
					{ name: 'age' },
					{ value: 42 },
					{ name: 'cost' },
					{ value: -6 }
				),
				obj
			);
		}
	);

	QUnit.test(
		'Функция правильно работает со свойствами, которые сами являются объектами',
		function (assert) {
			assert.deepEqual(zip({ data: {} }), { data: {} });

			assert.deepEqual(zip({ data: {} }, {}, {}), { data: {} });

			const obj1 = {
				data1: {},
				data2: {},
				data3: {},
			};
			assert.deepEqual(
				zip({ data1: {} }, { data2: {} }, { data3: {} }),
				obj1
			);

			assert.deepEqual(zip({ data: { value: 35 } }), {
				data: { value: 35 },
			});

			const obj2 = {
				data: { value: 35 },
				answer: 42,
			};
			assert.deepEqual(
				zip({ data: { value: 35 } }, { answer: 42 }),
				obj2
			);

			assert.deepEqual(
				zip(
					{ data: { value: 35 }, cost: '120$' },
					{ data: { name: 'age' } }
				),
				{ data: { value: 35 }, cost: '120$' }
			);

			const obj3 = {
				data1: { obj1: { a: 5 }, obj2: { b: 6 } },
				data2: { name: 'age' },
			};
			assert.deepEqual(
				zip(
					{ data1: { obj1: { a: 5 }, obj2: { b: 6 } } },
					{ data2: { name: 'age' } }
				),
				obj3
			);
		}
	);

	QUnit.test('Функция правильно работает с методами', function (assert) {
		function func() {
			return 0;
		}
		assert.deepEqual(zip({ func }), { func });
		const obj1 = {
			func() {
				return 0;
			},
		};
		assert.deepEqual(zip(obj1), obj1);

		function func1() {
			return this.name;
		}
		function func2() {
			return this.value;
		}
		const obj2 = {
			name: 'age',
			func1,
		};
		const obj3 = {
			value: 4,
			func2,
		};
		const obj23 = {
			name: 'age',
			func1,
			value: 4,
			func2,
		};
		assert.deepEqual(zip(obj2, obj3), obj23);

		function func3() {
			return 0;
		}
		function func4() {
			return 1;
		}
		const obj4 = {
			func: func3,
		};
		const obj5 = {
			func: func4,
		};
		const obj45 = {
			func: func3,
		};
		assert.deepEqual(zip(obj4, obj5), obj45);
	});

	QUnit.test(
		'Функция правильно работает в случае, когда на вход подаются не объекты или объекты с методами в протатипах',
		function (assert) {
			assert.deepEqual(zip(4), null);

			assert.deepEqual(zip('dfsd', 4), null);

			assert.deepEqual(zip(true), null);
			
			assert.deepEqual(zip(true, 4), null);

			assert.deepEqual(zip(4, { name: 'age' }), null);

			assert.deepEqual(zip({ name: 'age' }, {}, 'fsdf'), null);

			assert.deepEqual(zip(new Date()), null);

			assert.deepEqual(zip({}, new Date()), null);
		}
	);

	QUnit.test(
		'Функция правильно работает в случае, когда на вход не подается никаких объектов',
		function (assert) {
			assert.throws(zip);
		}
	);
});
