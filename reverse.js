// let string = process.argv;
// string = string.slice(2);

// const reverse = function(string) {
//   for (let x = 0; x < string.length; x++) {
//     console.log(wordReversal(string[x]));
//   }
// };
const reverse = function(string) {
  let backwards = '';
  for (let i = string.length - 1; i >= 0; i--) {
    backwards += string[i];
  } return backwards;
};

module.exports = reverse
