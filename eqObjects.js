const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false