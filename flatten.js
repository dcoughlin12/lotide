const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    let eachNum = array[i];
    if (Array.isArray(eachNum)) {
      for (let x = 0; x < eachNum.length; x++) {
        flatArray.push(eachNum[x]);
      }
    } else {
      flatArray.push(eachNum);
    }
  }return flatArray;
};

module.exports = flatten;



// console.log(flatten([1, 2, 3, 4, 5, 6, 7]))


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// console.log(flatten([1, 2, [3, 4], 5, [6]]))