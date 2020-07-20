const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArr = [];
  newArr = array.slice(1);
  console.log(newArr);
};

const words = [];
tail(words);
assertEqual(words.length, 3);