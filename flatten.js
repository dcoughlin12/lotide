const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  for (let i = 0; i < arrayOne.length; i++) {
    let index = i;
    if (arrayOne[i] === arrayTwo[index]) {
      TrueOrFalse = true;
    }	else {
      return false;
    }
  } return TrueOrFalse;
};


const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};

//create empty flatArray
// loop through array
//let eachNum = array[i]
//check if array[i] isArray()
//if true loop through and push results to flatArray
//return flatArray

const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    let eachNum = array[i];
    if (Array.isArray(eachNum)) {
      //console.log(eachNum)
      for (let x = 0; x < eachNum.length; x++) {
        flatArray.push(eachNum[x]);
      }
    } else {
      flatArray.push(eachNum);
    }
  }console.log(flatArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

