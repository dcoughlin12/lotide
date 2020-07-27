const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let eachLetter = sentence[i];
    //console.log(eachLetter)
    if (!results[eachLetter]) {
      results[eachLetter] = [];
    }
    results[eachLetter].push(i);
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;

console.log(letterPositions('lighthouse in the house'));
