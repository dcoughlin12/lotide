const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return a: 0 for 'a'", () => {
    assert.strictEqual(letterPositions('a'));
  });
});