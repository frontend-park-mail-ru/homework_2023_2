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

	QUnit.test('Функция работает, если ничего не передать', function (assert) {
		assert.deepEqual(zip(), {}, "Должен быть возвращен пустой объект");
	});

	QUnit.test('Функция работает, если среди свойст объекта есть другие объекты', function (assert) {
		
		const obj1 = {
			name: 'test'
		}

		const obj = {
			friend: obj1
		};

		assert.deepEqual(zip({friend: obj1}), obj, "У объектов должно быть общее свойство - другой объект");
	});

	QUnit.test('Функция работает, если передаются объекты с несколькими свойствами', function (assert) {
		
		const obj1 = {
			name: 'test',
			age: 19
		}


		const obj = {
			name: 'test',
			age: 19,
			friend: obj1,
			surname: 'testfas'
		}

		assert.deepEqual(zip({name: 'test', age: 19}, {friend: obj1, surname: 'testfas'}), obj, "Объект должен обладать всеми свойствами переданных объектов");
	});


	QUnit.test('Функция выбрасывает ошибку, если передаются некорректные параметры', function (assert) {
		assert.throws(() => {
			zip(5, 'hello');
		}, TypeError('Были переданы данные, содержащие не только объекты'));

		assert.throws(() => {
			zip('hello', false);
		}, TypeError('Были переданы данные, содержащие не только объекты'));
	});

	QUnit.test('Функция работает, если передаются свойства совпадающие со свойствами прототипа', function (assert) {
		
		const obj1 = {
			name: 'age',
			value: 42,
			valueOf: "это свойство valueOf"
		};

		const obj2 = {
			prop: false,
			attr: null
		};

		const obj3 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null,
			valueOf: "это свойство valueOf"
		};

		assert.deepEqual(zip(obj1, obj2), obj3);
	});

});

