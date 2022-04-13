function indexOf(words, target) {
  // util functions
  function upCharCount(word) {
    let upChars = word.split("").filter((letter) => {
      return letter == letter.toUpperCase();
    });
    return upChars.length;
  }

  // get the midel of the word array
  const targetLength = target.length;
  const targetUpChars = upCharCount(target);
  let lowIndex = 0;
  let highIndex = words.length;

  // start execution loop
  for (let step = 0; step < words.length; step++) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (words[midIndex] === target) return midIndex;

    let evalWordLength = words[midIndex].length;

    if (evalWordLength > targetLength) {
      highIndex = midIndex;
    } else if (evalWordLength < targetLength) {
      lowIndex = midIndex;
    } else {
      // evaluate uppercase characters
      let evalUpChars = upCharCount(words[midIndex]);

      if (evalUpChars > targetUpChars) {
        lowIndex = midIndex;
      } else if (evalUpChars < targetUpChars) {
        highIndex = midIndex;
      } else {
        if (words[midIndex] < target) {
          lowIndex = midIndex;
        } else if (words[midIndex] > target) {
          highIndex = midIndex;
        }
      }
    }
  }

  return "loop failed"; // nah, i don't think so..
}

let a = indexOf(
  [
    "JaCk",
    "Jack",
    "jack",
    "jackk",
    "COdewars",
    "codeWars",
    "abcdefgh",
    "codewars",
  ],
  "codewars"
);
let b = indexOf(
  [
    "cP",
    "rE",
    "sZ",
    "am",
    "bt",
    "ev",
    "hq",
    "rx",
    "yi",
    "akC",
    "nrcVpx",
    "iKMVqsj",
  ],
  "akC"
);
console.log(a); // 7
console.log(b); // 9
