// Return the number of times that the string "hi" appears anywhere in the given string.

// Examples

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

function countHi(str) {
  let countHi = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) === 'hi') countHi++;
  }

  return countHi;
}
