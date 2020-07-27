const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectEqual;


// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// let obj2 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// assertObjectEqual(obj1, obj2);












