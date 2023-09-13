'use strict';

QUnit.module('Проверка работы функции filter', function () {
	QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter экранирует символы, в случае отсуствия валидных html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input);

		const expected = '&lt;strong&gt;Hello, &lt;em&gt;World!&lt;/em&gt;&lt;/strong&gt; 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter корректно экранирует символы, в случае совпадения префиксов или постфиксов html-тэгов', function (assert) {
		const input = '<strong>Hello, <str>World!</str></strong> 1 + 2 < 4!';

		const output = filter(input, [ "str", "ong" ]);

		const expected = '&lt;strong&gt;Hello, <str>World!</str>&lt;/strong&gt; 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter выбрасывает TypeError при некорректом первом аргументе', function (assert) {
		const validTags = [ 'em', 'strong' ];

		const error = new TypeError('input must be string');

		assert.throws( function() { filter(1234, validTags) }, error, "filter(1234, validTags)" );
		assert.throws( function() { filter([1, 2, 3, 4], validTags) }, error, "filter([1, 2, 3, 4], validTags)" );
		assert.throws( function() { filter({ input: '<strong>' }, validTags) }, error, "filter({ input: '<strong>' })" );
		assert.throws( function() { filter(null, validTags) }, error, "filter(null, validTags)" );
	});

	QUnit.test('filter выбрасывает TypeError при некорректом втором аргументе', function (assert) {
		const input = '<strong>Hello, <str>World!</str></strong> 1 + 2 < 4!';

		const error = new TypeError('validTags must be array of string');

		assert.throws( function() { filter(input, [ 'em', 'strong', null]) }, error, "filter(input, [ 'em', 'strong', null])" );
		assert.throws( function() { filter(input, [ 'em', 'strong', 1234 ]) }, error, "filter(input, [ 'em', 'strong', 1234 ])" );
		assert.throws( function() { filter(input, 'strong') }, error, "filter(input, 'strong')");
		assert.throws( function() { filter(input, { validTags: 'strong' }) }, error, "filter(input, { validTags: 'strong' })" );
		assert.throws( function() { filter(input, null) }, error, "filter(input, null)" );
	
	});
});

