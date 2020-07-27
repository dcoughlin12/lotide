

const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1) {
    return true;
  }
  const longestArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  for (let i = 0; i < longestArray.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      //console.log('index is :' + i, 'one: ' + arrayOne[i], 'two: ' + arrayTwo[i])
      TrueOrFalse = true;
    } else {
      return false;
    }
  } return TrueOrFalse;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      if (eqArrays(object1[i], object2[i]) === false) {
        return false;
      }
    } else if (object1[i] !== object2[i]) {
      return false;
    }
  } return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
let obj1 = {
  a: 1,
  b: 2,
  c: 3
};
let obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
assertObjectEqual(obj1, obj2);












