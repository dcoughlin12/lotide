const assertEqual = require('./assertEqual');

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

module.exports = countLetters

// countLetters('lighthouse in the house');