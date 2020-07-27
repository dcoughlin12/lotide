const eqArrays = function(arrayOne, arrayTwo) {
  let TrueOrFalse = '';
  if (arrayOne.length < 1 && arrayTwo.length < 1){
    return true
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
  if (firstArr.length === secondArr.length && eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));


//!!!!!!!!!!!!!!!!!!   this code fails if we have one array longer than the other.. still returns true.!!!!!!!!!!