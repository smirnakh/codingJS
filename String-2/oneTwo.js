// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

// Examples

// oneTwo('abc') → bca
// oneTwo('tca') → cat
// oneTwo('tcagdo') → catdog

function oneTwo(str) {
  if (str.length < 3) return '';
  let result = '';
  for (let i = 0; i < str.length - 2; i += 3) {
    let slice = str.slice(i, i + 3);
    if (slice.length === 3) {
      result += slice[1] + slice[2] + slice[0];
    } else {
      result += slice;
    }
  }
  return result;
}
