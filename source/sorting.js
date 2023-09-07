"use strict";

function sorting(objects, fields) {
  fields
    .slice()
    .reverse()
    .forEach((field) => {
      objects.sort((a, b) => {
        if (a[field] >= b[field]) {
          return 1;
        }
        return -1;
      });
    });
  return objects;
}
