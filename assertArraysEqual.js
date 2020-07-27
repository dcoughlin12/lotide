const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length && eqArrays(firstArr, secondArr)) {
    return `✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`;
  } else {
    return `❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`;
  }
};

module.exports = assertArraysEqual

