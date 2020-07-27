const without = function(array, toRemove) {
  let modifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      modifiedArray.push(array[i]);
    }
  } console.log(modifiedArray);
};

module.exports = without;

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]







