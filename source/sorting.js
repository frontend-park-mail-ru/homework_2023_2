'use strict';

function sorting(plainArray, nameArray) {
  if (nameArray.length == 0 || plainArray.length == 0) return plainArray;

  if (!plainArray.reduce((res, item) => {
    for (let key of nameArray) {
      console.log(key in item);
      res &&= key in item;
    }
    return res;
  }, true)) return plainArray;

  if (!nameArray.reduce((res, current) => {
    if (!plainArray.reduce((isSameType, item) => {
      if (typeof isSameType[current] === typeof item[current]) return item;
      else return false;
    })) return false;
    return true;
  }, true)) return plainArray;

  return plainArray.sort((a, b) => {
    for (let name of nameArray) {
      if (a[name] > b[name]) return 1;
      if (a[name] == b[name]) continue;
      if (a[name] < b[name]) return 0;
    }
    return 0;
  });
}