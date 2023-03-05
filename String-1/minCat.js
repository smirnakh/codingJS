// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b) {
  const min = Math.min(a.length, b.length);
  const newA = a.substring(a.length - min);
  const newB = b.substring(b.length - min);
  return newA + newB;
}
