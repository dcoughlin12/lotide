const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//have to loop through both arrays to see if the arrayOne[i] matches arrayTwo[indexOf(arrayOne[i])

const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  for (let i = 0; i < arrayOne.length; i++) {
    let index = arrayOne.indexOf(arrayOne[i]);
    if (arrayOne[i] === arrayTwo[index]) {
      TrueOrFalse = true;
    }	else {
      TrueOrFalse = false;
    }
  } return TrueOrFalse;
};


