const sentence = "I am a web developer.";
let reverse = sentence.split("").reverse().join("");

console.log(reverse);

// for (let letter of sentence) {
//   // console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);

// for (let i = 0; i<sentence.length;i++) {
//     // console.log(sentence[i]);
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log (reverse);