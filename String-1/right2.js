// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str) {
  const left = str.slice(0, str.length - 2);
  const right = str.slice(str.length - 2);
  return right + left;
}
