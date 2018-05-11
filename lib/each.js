'use strict';

const objectIterator = function* (iterable) {
  if (Array.isArray(iterable) || typeof iterable === 'string') {
    for (let i = 0; i < iterable.length; i++) {
      yield [iterable[i], i];
    }
  } else if (typeof iterable === 'object') {
    let index = 0;
    for (const key of Object.keys(iterable)) {
      yield [key, iterable[key], index++];
    }
  } else {
    return [];
  }
};

objectIterator.setGlobal = function() {
  defineProperty(global, 'each', objectIterator);
};

objectIterator.setObjectsIterable = function() {
  defineProperty(Object.prototype, Symbol.iterator, objectIterator);
};

module.exports = objectIterator;

function defineProperty(object, key, value) {
  Object.defineProperty(object, key, {
    value: value,
    enumerable: false,
    writable: false,
    configurable: false
  });
}
