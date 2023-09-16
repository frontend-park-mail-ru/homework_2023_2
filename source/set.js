'use strict';

function set(obj, path, value) {
  const parts = path.split('.');
  let current_object = obj;
  for (let i = 1; i < parts.length - 1; ++i) {
    current_object = current_object[parts[i]] ??= {};
  }
  current_object[parts[parts.length - 1]] = value;
  return obj;
}