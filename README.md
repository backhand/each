each
=======================

[![Build Status](https://secure.travis-ci.org/backhand/each.png?branch=master)](https://travis-ci.org/backhand/each)

Installation:
------------------------
npm install each

Usage:
------
```
    const each = require('each');

    // Objects
    const obj = {
      key1: 'value1',
      key2: 'value2',
    };

    for (const [key, val] of each(obj)) {
      // 1st iteration: key is 'key1', val is 'value1'
      // 2nd iteration: key is 'key2', val is 'value2'
    }

    // Arrays
    const arr = ['value0', 'value1'];

    for (const [val, index] of each(obj)) {
      // 1st iteration: val is 'value0', index is 0
      // 2nd iteration: val is 'value1', index is 1
    }

    // Strings
    const str = 'abcd';

    for (const [char, pos] of each(obj)) {
      // 1st iteration: char is 'a', pos is 0
      // 2nd iteration: char is 'b', pos is 1
      // 3rd iteration: char is 'c', pos is 2
      // 4th iteration: char is 'd', pos is 3
    }
``

The MIT License (MIT)
---------------------

Copyright © `2016` `Frederik Hannibal`

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
