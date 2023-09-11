'use strict';

QUnit.module('Тестируем функцию sorting', function () {
    QUnit.test('sorting не меняет пустой массив', function (assert) {
        const initial = [];
        const actual = sorting(initial, []);

        const expected = [];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
        const initial = [
            {prop1: 1},
            {prop1: 2},
            {prop1: 3},
            {prop1: 4}
        ];
        const actual = sorting(initial, []);

        const expected = [
            {prop1: 1},
            {prop1: 2},
            {prop1: 3},
            {prop1: 4}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting выкидывает исключение, если передано несуществующее поле для сортировки', function (assert) {
        const initial = [
            {prop1: 1},
            {prop1: 2},
            {prop1: 3},
            {prop1: 4}
        ];

        let err = new Error('A non-existent object name was passed')

        assert.throws(function () {
            sorting(initial, ['prop2']);
        }, err, 'Expected sorting to throw a "non-existent object" error');
    });

    QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
        const initial = [
            {prop1: 30},
            {prop1: 1000},
            {prop1: 4},
            {prop1: 200}
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: 4},
            {prop1: 30},
            {prop1: 200},
            {prop1: 1000}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
        const initial = [
            {prop1: '30'},
            {prop1: '1000'},
            {prop1: '4'},
            {prop1: '200'}
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: '1000'},
            {prop1: '200'},
            {prop1: '30'},
            {prop1: '4'}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
        const initial = [
            {prop1: 3, id: 1},
            {prop1: 3, id: 2},
            {prop1: 1, id: 1},
            {prop1: 1, id: 2},
            {prop1: 4, id: 1},
            {prop1: 4, id: 2},
            {prop1: 2, id: 1},
            {prop1: 2, id: 2}
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: 1, id: 1},
            {prop1: 1, id: 2},
            {prop1: 2, id: 1},
            {prop1: 2, id: 2},
            {prop1: 3, id: 1},
            {prop1: 3, id: 2},
            {prop1: 4, id: 1},
            {prop1: 4, id: 2}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует по нескольким полям', function (assert) {
        const initial = [
            {prop1: 3, id: '1'},
            {prop1: 3, id: '2'},
            {prop1: 1, id: '1'},
            {prop1: 1, id: '2'},
            {prop1: 4, id: '1'},
            {prop1: 4, id: '2'},
            {prop1: 2, id: '1'},
            {prop1: 2, id: '2'}
        ];
        const actual = sorting(initial, ['id', 'prop1']);

        const expected = [
            {prop1: 1, id: '1'},
            {prop1: 2, id: '1'},
            {prop1: 3, id: '1'},
            {prop1: 4, id: '1'},
            {prop1: 1, id: '2'},
            {prop1: 2, id: '2'},
            {prop1: 3, id: '2'},
            {prop1: 4, id: '2'}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не изменяет корректно отсортированный массив', function (assert) {
        const initial = [
            {prop1: 30, prop2: 'a'},
            {prop1: 1000, prop2: 'b'},
            {prop1: 4, prop2: 'c'},
            {prop1: 200, prop2: 'd'}
        ];
        const actual = sorting(initial, ['prop2', 'prop1']);

        const expected = [
            {prop1: 30, prop2: 'a'},
            {prop1: 1000, prop2: 'b'},
            {prop1: 4, prop2: 'c'},
            {prop1: 200, prop2: 'd'}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по численному свойству и строковому свойству, содержащий одинаковые значения', function (assert) {
        const initial = [
            {prop1: 30, prop2: 'a'},
            {prop1: 1000, prop2: 'b'},
            {prop1: 4, prop2: 'c'},
            {prop1: 200, prop2: 'd'},
            {prop1: 30, prop2: 'c'},
            {prop1: 4, prop2: 'a'},
        ];
        const actual = sorting(initial, ['prop2', 'prop1']);

        const expected = [
            {prop1: 4, prop2: 'a'},
            {prop1: 30, prop2: 'a'},
            {prop1: 1000, prop2: 'b'},
            {prop1: 4, prop2: 'c'},
            {prop1: 30, prop2: 'c'},
            {prop1: 200, prop2: 'd'}
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по нескольким свойствам, одно из которых отсутствует в объекте', function (assert) {
        const initial = [
            {prop1: 3, prop2: 'b'},
            {prop1: 2, prop2: 'a'},
            {prop1: 1, prop2: 'c'},
            {prop1: 4},
        ];
        const actual = sorting(initial, ['prop2', 'prop1']);

        const expected = [
            {prop1: 2, prop2: 'a'},
            {prop1: 3, prop2: 'b'},
            {prop1: 1, prop2: 'c'},
            {prop1: 4},
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по свойству, которое содержит значение null', function (assert) {
        const initial = [
            {prop1: 3, prop2: null},
            {prop1: 2, prop2: 'a'},
            {prop1: 1, prop2: 'c'},
            {prop1: 4},
        ];
        const actual = sorting(initial, ['prop2', 'prop1']);

        const expected = [
            {prop1: 2, prop2: 'a'},
            {prop1: 1, prop2: 'c'},
            {prop1: 3, prop2: null},
            {prop1: 4},
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по строкам, которые являются объектами, а не примитивами', function (assert) {
        const a = new String('a');
        const b = new String('b');

        const initial = [
            {prop1: b},
            {prop1: 'b'},
            {prop1: 'c'},
            {prop1: 'a'},
            {prop1: a},
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: 'a'},
            {prop1: a},
            {prop1: b},
            {prop1: 'b'},
            {prop1: 'c'},
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортирует массив по числам, которые являются объектами, а не примитивами', function (assert) {
        const one = new String(1);
        const two = new String(2);

        const initial = [
            {prop1: two},
            {prop1: 2},
            {prop1: 3},
            {prop1: 1},
            {prop1: one},
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: 1},
            {prop1: one},
            {prop1: two},
            {prop1: 2},
            {prop1: 3},
        ];

        assert.deepEqual(actual, expected);
    });
});
