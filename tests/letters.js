'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
		assert.strictEqual(letters('undefined', undefined), 'ufi');
		assert.strictEqual(letters(new String('undefined')), 'ufi');
		assert.strictEqual(letters(new String('undefined'), new Boolean(true)), 'undefi');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Тест на пустую строку, возвращает пустую строку', function (assert) {
		assert.strictEqual(letters(''), '');
		assert.strictEqual(letters('', true), '');
		assert.strictEqual(letters('', false), '');
	});

	QUnit.test('Тест на регистр, удаляет только повторяющиеся символы одного регистра', function (assert) {
		assert.strictEqual(letters('aaAaBBbB'), 'Ab');
		assert.strictEqual(letters('ClockwerK'), 'ClockwerK');
		assert.strictEqual(letters('AncienT Apparition'), 'ceT arto');
	});

	QUnit.test('Тест на мультсимвольность', function (assert) {
		assert.strictEqual(letters('abcabcabc'), '');
	});

	QUnit.test('Тест на неверно переданные параметры', function (assert) {
		assert.throws(
			() => letters(true, false),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters(132, "fake"),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters(333, 32),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters([1, 2, 3, 4, 5], 32),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters((a, b) => a + b, "fake"),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters(1.2, true),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters(null, null),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters("null", null),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters(Symbol("input"), Symbol("flag")),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters({ a: "foo", b: 42, c: {} }, { a: "foo", b: 42, c: {} }),
			TypeError('Wrong input type, must be (string, boolean)')
		);
		assert.throws(
			() => letters("aaAaBBbB", "fake"),
			TypeError('Wrong input type, must be (string, boolean)')
		);
	});

	QUnit.test('Тест на полную строку с флагом', function (assert) {
		assert.strictEqual(letters("nyx assasin", true), 'nyx asi');
		assert.strictEqual(letters("nyx assasin", false), 'yx asin');
		assert.strictEqual(letters("Yo hablas espanol un poquito", true), 'Yo hablsepnuqit');
		assert.strictEqual(letters("Buenas noches mi familia.", false), 'Bunoches fmlia.');
	});

});
