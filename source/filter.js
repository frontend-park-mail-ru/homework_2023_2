'use strict';

/** 
 * @function - Escapes special characters with exception of valid HTML-tags
 * @param {string} input - String whose characteres need to be escaped
 * @param {string[]} validTags - Valid HTML-tags
 * @return {string} - String with escaped special characters
 */
const filter = (input, validTags = []) => {

    if (typeof input !== 'string' && !(input instanceof String)) {
        throw TypeError('input must be string');
    }

    if (!Array.isArray(validTags) || validTags.some( (item) => typeof(item) !== 'string') ) {
        throw TypeError('validTags must be array of string');
    }

    const tags = validTags.join('|');

    const ltRegExp = new RegExp(`\<(?!(\/?)(${tags})[\\>]+)`, 'gi'),
          gtRegExp = new RegExp(`(?<!(\/?)[</]+(${tags}))\>`, 'gi');

    return input
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;')
        .replaceAll(ltRegExp, '&lt;')
        .replaceAll(gtRegExp, '&gt;');
}

