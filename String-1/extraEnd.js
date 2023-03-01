// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

// extraEnd('Hello') → lololo
// extraEnd('ab') → ababab
// extraEnd('Hi') → HiHiHi

function extraEnd(str) {
  const lastLetters = str.slice(str.length - 2);
  if (str.length == 2) return str.repeat(3);

  return lastLetters.repeat(3);
}
