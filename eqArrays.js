const assertEqual = require('./assertEqual')

const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1){
    return true
  }
  const longestArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  for (let i = 0; i < longestArray.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      TrueOrFalse = true;
    } else {
      return false;
    }
  } return TrueOrFalse
};

module.exports = eqArrays;



