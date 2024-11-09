let count = 0;
let i = 0;

let str = "Count how many times a string has the letter a";

while (i <= str.length) {
  if (str[i] === "a" || str[i] === "A") {
    count++;
  }

  i++;
}
console.log(count);
