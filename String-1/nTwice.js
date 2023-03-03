// Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

// Examples

// nTwice('hello', 2) → helo
// nTwice('Chocolate', 3) → Choate
// nTwice('Chocolate', 1) → Ce

function nTwice(str, n) {
  let firstChars = str.substr(0, n);
  let lastChars = str.substr(-n, n);
  return firstChars + lastChars;
}
