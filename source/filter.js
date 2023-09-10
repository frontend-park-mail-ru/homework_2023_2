'use strict';

/** 
 * @function - Escapes special characters with exception of valid http-tags
 * @param {string} input - String whose characteres need to be escaped
 * @param {string[]} validTags - Valid http-tags
 * @return {string} - String with escaped special characters
 */
const filter = (input, validTags = []) => {

    if (typeof input !== "string") {
        console.error("input must be string");
        return;
    }

    if (!Array.isArray(validTags) || validTags.some( (item) => typeof(item) !== "string") ) {
        console.error("validTags must be array of string");
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

