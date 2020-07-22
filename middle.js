const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1) {
    return true;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    let index = i;
    if (arrayOne[i] === arrayTwo[index]) {
      TrueOrFalse = true;
    } else {
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

/*given Array if numbers
make empty array to push results to
check length / 2
  let middleIndex = length / 2
  if number % 1 === 0   push array[middleIndex]
    else  push middleIndex - 0.5
          AND push middleIndex + 0.5

*/

const middle = function(array) {
  let returnMiddleNum = [];
  let middleIndex = (array.length - 1) / 2;
  //console.log(middleIndex)
  if (middleIndex < 1) {
    return returnMiddleNum;
  } else if (!Number.isInteger(middleIndex)) {
    returnMiddleNum.push(array[middleIndex - 0.5], array[middleIndex + 0.5]);
    return returnMiddleNum;
  } else {
    returnMiddleNum.push(array[middleIndex]);
    return returnMiddleNum;
  }
};

// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
 




