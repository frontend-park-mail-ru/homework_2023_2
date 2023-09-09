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

	QUnit.test('Возвращает пустую строку', function (assert) {
		assert.strictEqual(letters(''), '');

		assert.strictEqual(letters('', true), '');

		assert.strictEqual(letters('', false), '');
	});

	QUnit.test('Возвращает строку с одним символом', function (assert) {
		assert.strictEqual(letters('a'), 'a');

		assert.strictEqual(letters('a', true), 'a');

		assert.strictEqual(letters('a', false), 'a');	
	});

	QUnit.test('Удаляет повторяющиеся символы одного регистра', function (assert) {
		assert.strictEqual(letters('AaABbbC'), 'aBC');
		assert.strictEqual(letters('AAAAAA'), '');
		assert.strictEqual(letters('Aaw ABss'), 'aw B');
		assert.strictEqual(letters('Aaw ABss RRED'), 'awBED');

		assert.strictEqual(letters('AaABbbC', true), 'AaBbC');
		assert.strictEqual(letters('AAAAAA', true), 'A');
		assert.strictEqual(letters('Aaw ABss', true), 'Aaw Bs');
		assert.strictEqual(letters('Aaw ABss RRED', true), 'Aaw BsRED');

		assert.strictEqual(letters('AaABbbC', false), 'aABbC');
		assert.strictEqual(letters('AAAAAA', false), 'A');
		assert.strictEqual(letters('Aaw ABss', false), 'aw ABs');
		assert.strictEqual(letters('Aaw ABss RRED', false), 'awABs RED');
	});

	QUnit.test('Правильно работает с длинными строками', function (assert) {
		assert.strictEqual(letters('cat'.repeat(3000)), '');

		assert.strictEqual(letters('cat'.repeat(3000), true), 'cat');

		assert.strictEqual(letters('cat'.repeat(3000), false), 'cat');
	});

	QUnit.test('Правильно обрабатывает строки с символами табуляции, переноса строки', function (assert) {
		assert.strictEqual(letters('\t\v\n'), '\t\v\n');

		assert.strictEqual(letters('\t\v\n', true), '\t\v\n');

		assert.strictEqual(letters('\t\v\n', false), '\t\v\n');
	});

	QUnit.test('Умеет обрабатывать неправильные данные', function (assert) {
        assert.strictEqual(letters(444), 'error');
		assert.strictEqual(letters(undefined), 'error');
		assert.strictEqual(letters(true), 'error');
        assert.strictEqual(letters(null), 'error');
        assert.strictEqual(letters(NaN), 'error');
		assert.strictEqual(letters(function() {}), 'error');
		assert.strictEqual(letters(() => {}), 'error');
		assert.strictEqual(letters(['lol']), 'error');
		assert.strictEqual(letters(['l', 'o', 'l']), 'error');
		assert.strictEqual(letters(['yt', 'o', 'gl', 't', 'ttt']), 'error');

		assert.strictEqual(letters(444, null), 'error');
		assert.strictEqual(letters(undefined, 234), 'error');
		assert.strictEqual(letters(true, ['monkey']), 'error');
        assert.strictEqual(letters(null, ['m', 'o', 'n', 'k', 'e', 'y']), 'error');
        assert.strictEqual(letters(NaN, () => {}), 'error');
		assert.strictEqual(letters(['lol'], ['rr', 'trrr', 'r', 't']), 'error');
		assert.strictEqual(letters(['l', 'o', 'l'], function() {}), 'error');
		assert.strictEqual(letters(['yt', 'o', 'gl', 't', 'ttt'], NaN), 'error');
    });
});
