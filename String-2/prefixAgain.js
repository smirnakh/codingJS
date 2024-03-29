// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

// Examples

// prefixAgain('abXYabc', 1) → true
// prefixAgain('abXYabc', 2) → true
// prefixAgain('abXYabc', 3) → false

function prefixAgain(str, n) {
  const prefix = str.substring(0, n);
  for (let i = n; i <= str.length - n; i++) {
    if (str.substring(i, i + n) === prefix) {
      return true;
    }
  }
  return false;
}
