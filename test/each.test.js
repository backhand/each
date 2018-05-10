const assert = require('assert');
const each = require('..');

describe('each', function() {
  it('should iterate over keys and values of an object', () => {
    const obj = {
      key1: 'val1',
      key2: 'val2',
      key3: 'val3',
      key4: 'val4'
    };

    let i = 1;
    for ([key, val] of each(obj)) {
      assert.equal(key, `key${i}`);
      assert.equal(val, `val${i++}`);
    }
  });

  it('should iterate over values and index an array', () => {
    const arr = ['val0', 'val1', 'val2', 'val3', 'val4'];

    let i = 0;
    for ([val, index] of each(arr)) {
      assert.equal(val, `val${i}`);
      assert.equal(index, i++);
    }
  });

  it('should iterate over characters and positions in a string', () => {
    const str = 'abcdefghijk';

    const expected = str.split('');
    let i = 0;
    for ([char, pos] of each(str)) {
      assert.equal(char, expected[i]);
      assert.equal(pos, i++);
    }
  });

  it('should return an empty array if given unsupported type', () => {
    assert.deepEqual(each(123), []);
  });
}); // End describe testname
