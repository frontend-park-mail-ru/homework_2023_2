"use strict";

QUnit.module("Тестируем функцию sorting", function () {
  QUnit.test("sorting не меняет пустой массив", function (assert) {
    const initial = [];
    const actual = sorting(initial, []);

    const expected = [];

    assert.deepEqual(actual, expected);
  });

  QUnit.test(
    "sorting не изменяет массив, если не передано никаких полей для сортировки",
    function (assert) {
      const initial = [{ prop1: 1 }, { prop1: 2 }, { prop1: 3 }, { prop1: 4 }];
      const actual = sorting(initial, []);

      const expected = [{ prop1: 1 }, { prop1: 2 }, { prop1: 3 }, { prop1: 4 }];

      assert.deepEqual(actual, expected);
    }
  );

  QUnit.test(
    "sorting сортирует массив по численному свойству",
    function (assert) {
      const initial = [
        { prop1: 30 },
        { prop1: 1000 },
        { prop1: 4 },
        { prop1: 200 },
      ];
      const actual = sorting(initial, ["prop1"]);

      const expected = [
        { prop1: 4 },
        { prop1: 30 },
        { prop1: 200 },
        { prop1: 1000 },
      ];

      assert.deepEqual(actual, expected);
    }
  );

  QUnit.test(
    "sorting сортирует массив по нескольким полям по разным свойствам",
    function (assert) {
      const initial = [
        { name: "Tom", age: 30 },
        { name: "Dolores", age: 10 },
        { name: "John", age: 40 },
        { name: "Ann", age: 31 },
        { name: "Paul", age: 40 },
      ];
      const actual = sorting(initial, ["age", "name"]);

      const expected = [
        { age: 10, name: "Dolores" },
        { age: 30, name: "Tom" },
        { age: 31, name: "Ann" },
        { age: 40, name: "John" },
        { age: 40, name: "Paul" },
      ];

      assert.deepEqual(actual, expected);
    }
  );

  QUnit.test("sorting сортирует массив вещественных чисел", function (assert) {
    const initial = [
      { name: "Tom", age: 30.5 },
      { name: "Dolores", age: 10.3 },
      { name: "John", age: 40.2 },
      { name: "Ann", age: 31 },
      { name: "Paul", age: 40.1 },
    ];
    const actual = sorting(initial, ["age"]);

    const expected = [
      { name: "Dolores", age: 10.3 },
      { name: "Tom", age: 30.5 },
      { name: "Ann", age: 31 },
      { name: "Paul", age: 40.1 },
      { name: "John", age: 40.2 },
    ];

    assert.deepEqual(actual, expected);
  });

  QUnit.test(
    "sorting сортирует массив по строковому свойству",
    function (assert) {
      const initial = [
        { prop1: "30" },
        { prop1: "1000" },
        { prop1: "4" },
        { prop1: "200" },
      ];
      const actual = sorting(initial, ["prop1"]);

      const expected = [
        { prop1: "1000" },
        { prop1: "200" },
        { prop1: "30" },
        { prop1: "4" },
      ];

      assert.deepEqual(actual, expected);
    }
  );

  QUnit.test("sorting реализует устойчивую сортировку", function (assert) {
    const initial = [
      { prop1: 3, id: 1 },
      { prop1: 3, id: 2 },
      { prop1: 1, id: 1 },
      { prop1: 1, id: 2 },
      { prop1: 4, id: 1 },
      { prop1: 4, id: 2 },
      { prop1: 2, id: 1 },
      { prop1: 2, id: 2 },
    ];
    const actual = sorting(initial, ["prop1"]);

    const expected = [
      { prop1: 1, id: 1 },
      { prop1: 1, id: 2 },
      { prop1: 2, id: 1 },
      { prop1: 2, id: 2 },
      { prop1: 3, id: 1 },
      { prop1: 3, id: 2 },
      { prop1: 4, id: 1 },
      { prop1: 4, id: 2 },
    ];

    assert.deepEqual(actual, expected);
  });

  QUnit.test("sorting сортирует по нескольким полям", function (assert) {
    const initial = [
      { prop1: 3, id: "1" },
      { prop1: 3, id: "2" },
      { prop1: 1, id: "1" },
      { prop1: 1, id: "2" },
      { prop1: 4, id: "1" },
      { prop1: 4, id: "2" },
      { prop1: 2, id: "1" },
      { prop1: 2, id: "2" },
    ];
    const actual = sorting(initial, ["id", "prop1"]);

    const expected = [
      { prop1: 1, id: "1" },
      { prop1: 2, id: "1" },
      { prop1: 3, id: "1" },
      { prop1: 4, id: "1" },
      { prop1: 1, id: "2" },
      { prop1: 2, id: "2" },
      { prop1: 3, id: "2" },
      { prop1: 4, id: "2" },
    ];

    assert.deepEqual(actual, expected);
  });
});
