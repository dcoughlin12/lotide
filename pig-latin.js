let input = process.argv;
input = input.slice(2);
//console.log(input[0][0]);
let storedLetter = [];
for (let i = 0; i < input.length; i++) {
  let eachWord = input[i];
  storedLetter = eachWord[0];
  eachWord += storedLetter;
  console.log(eachWord.substr(1) + 'ay');
}