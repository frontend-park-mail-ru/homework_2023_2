'use strict';

const escapeChars = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};


/**
 * Экранирует символы в html, оставляя только разрешенные теги
 * @param {string} text - фильтруемый текст
 * @param {string[]} [tags=[]]  - список разрешенных тегов
 * @returns {string} отфильтрованный текст
 * @throws {TypeError} при неверных аргументах
 */
const filter = (text, tags = []) => {
  if (typeof text !== "string" && !(text instanceof String)) {
    throw new TypeError("expected String");
  }
  if (!Array.isArray(tags) || tags.some((el) => typeof el !== "string" && !(text instanceof String))) {
    throw new TypeError("expected Array of strings");
  }
  const resArr = text.split(/([&"<>'])/);
  for (let i = 1; i < resArr.length; i += 2) {
    if (
      resArr[i] === "<" && resArr[i + 2] === ">" &&
      tags.includes(resArr[i + 1].slice(+resArr[i+1].startsWith("/")))
    ) {
      i += 2;
      continue;
    }
    resArr[i] = escapeChars[resArr[i]];
  }
  return resArr.join("");
};
