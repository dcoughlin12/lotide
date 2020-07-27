let input = process.argv;
input = input.slice(2);
//console.log(input[0][0]);
for (let i = 0; i < input.length; i++) {
  let storedLetter = [];
  let eachWord = input[i];
  storedLetter = eachWord[0];
  eachWord += storedLetter;
  return (eachWord.substr(1) + 'ay');
}
