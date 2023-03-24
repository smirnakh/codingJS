// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

// Examples

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy

function plusOut(str, word) {
  let plusStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) === word) {
      plusStr += word;
      i += word.length - 1;
    } else {
      plusStr += '+';
    }
  }
  return plusStr;
}
