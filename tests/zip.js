'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});

	QUnit.test('Функция правильно работает с непустыми объектами, между которыми находятся пустые объекты', function (assert) {
		assert.deepEqual(zip({node: 1, object: 2}, {}, {node: 2, ob: 1, object: 3}), {node: 1, object: 2, ob: 1});
		assert.deepEqual(zip({value: 72}, {}, {}, {value: 40}), {value: 72});
		assert.deepEqual(zip({value: 71}, {}, {value: 72}), {value: 71});
	});

	QUnit.test('Функция правильно работает с непустыми объектами, которые стоят в конце среди пустых объектов', function (assert) {
		assert.deepEqual(zip({}, {}, {node: 1, object: 2, ob: 1}), {node: 1, object: 2, ob: 1});
		assert.deepEqual(zip({}, {}, {}, {index: 5}), {index: 5});
		assert.deepEqual(zip({}, {}, {}, {}, {length: 199}), {length: 199});
	});

	QUnit.test('Функция игнорирует аргументы, не являющиеся объектами, а также массивы и строки', function (assert) {
		assert.deepEqual(zip(1, 3, {node: 1, object: 2, ob: 1}), {node: 1, object: 2, ob: 1});
		assert.deepEqual(zip(1, {x: 3}, 3, 5, {x: 5, y: 3}), {x: 3, y: 3});
		assert.deepEqual(zip([1, 2, 3], "string", {x: 3, y: 3}), {x: 3, y: 3});
	});
});
