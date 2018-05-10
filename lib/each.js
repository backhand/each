module.exports = function*(iterable) {
  if (Array.isArray(iterable) || typeof iterable === 'string') {
    let index = 0;
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
