const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1){
    return true
  }
  const longestArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  for (let i = 0; i < longestArray.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      //console.log('index is :' + i, 'one: ' + arrayOne[i], 'two: ' + arrayTwo[i])
      TrueOrFalse = true;
    } else {
      return false;
    }
  } return TrueOrFalse
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true)

