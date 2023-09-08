'use strict';

/** 
 * @function - Escapes special characters with exception of valid http-tags
 * @param {string} input - String whose characteres need to be escaped
 * @param {Array} validTags - Valid http-tags
 * @return {string} - String with escaped special characters
 */
const filter = (input, validTags = []) => {
    if (!Array.isArray(validTags)) {
        console.error("Error: input data is not Array");
        return;
    }

    const tags = validTags.join('|');

    const ltRegExp = new RegExp(`\<(?!(\/?)(${tags})[\\>]+)`, "gi"),
          gtRegExp = new RegExp(`(?<!(\/?)[</]+(${tags}))\>`, "gi");

    return input
        .replaceAll(`&`, "&amp;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`'`, "&#39;")
        .replaceAll(ltRegExp, "&lt;")
        .replaceAll(gtRegExp, "&gt;");
}
