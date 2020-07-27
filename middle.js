const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
 




