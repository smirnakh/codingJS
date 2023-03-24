// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

// Examples

// mixString('abc', 'xyz') → axbycz
// mixString('Hi', 'There') → HTihere
// mixString('xxxx', 'There') → xTxhxexre

function mixString(a, b) {
  let result = '';
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    result += a[i] + b[i];
  }
  return result + a.substring(i) + b.substring(i);
}
