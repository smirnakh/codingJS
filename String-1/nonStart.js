// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b) {
  const letterA = a.slice(1, a.length);
  const letterB = b.slice(1, b.length);
  return letterA + letterB;
}
