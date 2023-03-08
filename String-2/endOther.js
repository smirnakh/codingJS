// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true

function endOther(a, b) {
  let lowerStrA = a.toLowerCase();
  let lowerStrB = b.toLowerCase();
  let endStrA = lowerStrA.substring(lowerStrA.length - lowerStrB.length);
  let endStrB = lowerStrB.substring(lowerStrB.length - lowerStrA.length);
  if (endStrA === lowerStrB || endStrB === lowerStrA) {
    return true;
  } else {
    return false;
  }
}
