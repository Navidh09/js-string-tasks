let text = "Capitalize evEry fiRst Letter of each word in a String";

let text1 = text.split(" ");

// console.log (text1);

let sentence = [];

for (let i = 0; i < text1.length; i++) {
  let letter = text1[i];
  // console.log(letter);
  let capitalLetter = letter.slice(0, 1).toUpperCase();
  let smallLetter = letter.slice(1, letter.length).toLowerCase();
  let word = capitalLetter + smallLetter;
  //   console.log(word);

  sentence.push(word);
}
console.log(sentence.join(" "));
