const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should return 2 for ['a', 'b', 'c','a']", () => {
    assert.deepEqual(countOnly(['a', 'b', 'c','a'], {'a': true, 'b': true}), {a: 2, b: 1});
  });
  it("should return {} for an undefined string", () => {
    assert.deepEqual(countOnly(['a', 'b', 'c','a'], {'d': true}), {});
  });
  it("should return {a: 2} if given an invalis and valis string", () => {
    assert.deepEqual(countOnly(['a', 'b', 'c','a'], {'d': true, 'a': true}), {a: 2});
  });
});