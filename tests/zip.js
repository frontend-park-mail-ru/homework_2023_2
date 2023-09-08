"use strict";

QUnit.module("Тестируем функцию zip", function () {
  QUnit.test("Функция работает с единственным объектом", function (assert) {
    assert.deepEqual(zip({}), {});
    assert.deepEqual(zip({ answer: 42 }), { answer: 42 });
    assert.deepEqual(zip({ name: "Georg" }), { name: "Georg" });
    const obj = {
      count: 0,
      cost: "120$",
    };
    assert.deepEqual(zip(obj), obj);
  });

  QUnit.test(
    "Функция работает с объектами среди которых есть объекты без свойств",
    function (assert) {
      assert.deepEqual(zip({}, {}), {});
      assert.deepEqual(zip({ answer: 42 }, {}), { answer: 42 });
      assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
      assert.deepEqual(zip({}, { answer: 42 }), { answer: 42 });
      assert.deepEqual(zip({}, {}, {}, { name: "Georg" }), { name: "Georg" });

      const obj = {
        count: 0,
        cost: "120$",
      };

      assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
    }
  );

  QUnit.test(
    "Функция работает с объектами со свойствами с разными именами",
    function (assert) {
      const obj = {
        count: 0,
        cost: "120$",
      };

      assert.deepEqual(zip({ count: 0 }, { cost: "120$" }), obj);

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
        name: "age",
        value: 42,
      };

      const obj4 = {
        prop: false,
        attr: null,
      };

      const obj5 = {
        name: "age",
        value: 42,
        prop: false,
        attr: null,
      };

      assert.deepEqual(zip(obj3, obj4), obj5);
    }
  );

  QUnit.test(
    "Функция правильно работает со свойствами, которые встречаются в нескольких объектах",
    function (assert) {
      assert.deepEqual(
        zip({ answer: 42 }, { answer: false }),
        { answer: 42 },
        "Значение должно браться из первого встретившегося поля"
      );
      assert.deepEqual(zip({ age: 5 }, {}, { age: 4 }, { age: 72 }), {
        age: 5,
      });

      const obj = {
        name: "age",
        value: 42,
      };
      assert.deepEqual(
        zip({ name: "age" }, { value: 42 }, { name: "cost" }, { value: -6 }),
        obj
      );
    }
  );

  QUnit.test(
    "Функция правильно работает со свойствами, которые сами являются объектами",
    function (assert) {
      assert.deepEqual(zip({ data: {} }), { data: {} });

      assert.deepEqual(zip({ data: {} }, {}, {}), { data: {} });

      const obj1 = {
        data1: {},
        data2: {},
        data3: {},
      };
      assert.deepEqual(zip({ data1: {} }, { data2: {} }, { data3: {} }), obj1);

      assert.deepEqual(zip({ data: { value: 35 } }), { data: { value: 35 } });

      const obj2 = {
        data: { value: 35 },
        answer: 42,
      };
      assert.deepEqual(zip({ data: { value: 35 } }, { answer: 42 }), obj2);

      assert.deepEqual(
        zip({ data: { value: 35 }, cost: "120$" }, { data: { name: "age" } }),
        { data: { value: 35 }, cost: "120$" }
      );

      const obj3 = {
        data1: { obj1: { a: 5 }, obj2: { b: 6 } },
        data2: { name: "age" },
      };
      assert.deepEqual(
        zip(
          { data1: { obj1: { a: 5 }, obj2: { b: 6 } } },
          { data2: { name: "age" } }
        ),
        obj3
      );
    }
  );
});
