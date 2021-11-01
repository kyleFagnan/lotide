const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [4, 5, 6]); // => false
assertArraysEqual([[2, 3], [3]], [[2, 3], [3]]) // => true
assertArraysEqual([[2], [4]], [[2], [4, 6]]) // => false
