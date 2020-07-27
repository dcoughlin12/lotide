// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// const words = [1, 2, 3, 4];
// assertEqual(tail(words).length, words.length -1);

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
  	assert.deepEqual(tail(['5']), [])
  })
});