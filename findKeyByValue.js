// given object and value
// scan the object (for in?) and return the first key that contains that valie
// if no key with that value if found, then return undefined


const findKeyByValue = function(object, value) {
  for (let i in object) {
    if (object[i] === value) {
      return i;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   "sci_fi": "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);