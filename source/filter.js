'use strict';

/** @function */
const filter = (input, validTags) => {
    if (!Array.isArray(validTags)) {
        console.error("Error: input data is not array");
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
