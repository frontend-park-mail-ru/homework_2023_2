'use strict';

const filter = (input, validTags) => {
    const tags = validTags?.join('|');

    const ltRegExp = new RegExp(`\<(?!(\/?)(${tags})[\s\>]+)`, "g"),
          gtRegExp = new RegExp(`(?<!(\/?)[</]+(${tags}))\>`, "g");
          
    return input
        .replaceAll(`&`, "&amp;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`'`, "&#39;")
        .replaceAll(ltRegExp, "&lt;")
        .replaceAll(gtRegExp, "&gt;");
}
