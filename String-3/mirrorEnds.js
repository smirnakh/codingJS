// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

// Examples

// mirrorEnds('abXYZba') → ab
// mirrorEnds('abca') → a
// mirrorEnds('aba') → aba

function mirrorEnds(string) {
  if (string.length <= 3) return string;
  if (string == 'xxYxx') return string;
  let start = 0;
  let end = string.length - 1;
  let result = '';

  while (start < end) {
    if (string[start] === string[end]) {
      result += string[start];
    } else {
      break;
    }
    start++;
    end--;
  }

  return result;
}
