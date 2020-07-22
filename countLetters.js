const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//input is a string

const countLetters = function(string) {
//remove spaces
  string = string.replace(/\s/g, '');
  let resultObject = {};
  for (letter in string) {
    let eachLetter = string[letter];
    if (resultObject[eachLetter]) {
      resultObject[eachLetter] ++;
    } else {
      resultObject[eachLetter] = 1;
    }
  } console.log(resultObject);
};

countLetters('lighthouse Labs');