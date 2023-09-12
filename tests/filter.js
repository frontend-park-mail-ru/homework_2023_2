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

	QUnit.test('filter не экранирует валидные и экранирует не валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		assert.strictEqual(filter(input, ['em']), '&lt;strong&gt;Hello, <em>World!</em>&lt;/strong&gt; 1 + 2 &lt; 4!');
		assert.strictEqual(filter(input, ['strong']), '<strong>Hello, &lt;em&gt;World!&lt;/em&gt;</strong> 1 + 2 &lt; 4!');
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter экранирует символы подряд, в конце, в начале', function (assert) {
		assert.strictEqual(filter(`"1 && 1 <script>alert('1');</script>"`, [ 'script' ]), '&quot;1 &amp;&amp; 1 <script>alert(&#39;1&#39;);</script>&quot;');
		assert.strictEqual(filter(new String(`"1 && 1 <script>alert('1');</script>"`), [ 'script' ]), '&quot;1 &amp;&amp; 1 <script>alert(&#39;1&#39;);</script>&quot;');
	});

	QUnit.test('filter экранирует с одним аргументом', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter допускает только массив строк', function (assert) {
		assert.throws(()=> filter(`<script>alert('1');</script>`, null), new TypeError("expected Array of strings"));
		assert.throws(()=> filter(`<script>alert('1');</script>`, [null, null]), new TypeError("expected Array of strings"));
	});

	QUnit.test('filter допускает только текст', function (assert) {
		assert.throws(()=> filter([1, 2 , 4]), new TypeError("expected String"));
	});
});
