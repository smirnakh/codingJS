// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

// Examples

// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11

function wordEnds(str, word) {
  let result = '';
  let wordLen = word.length;

  for (let i = 0; i < str.length - wordLen + 1; i++) {
    if (str.substring(i, i + wordLen) === word) {
      if (i > 0) {
        result += str.charAt(i - 1);
      }
      if (i < str.length - wordLen) {
        result += str.charAt(i + wordLen);
      }
    }
  }

  return result;
}
