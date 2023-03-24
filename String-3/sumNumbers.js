// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

// sumNumbers('abc123xyz') → 123
// sumNumbers('aa11b33') → 44
// sumNumbers('7 11') → 18

function sumNumbers(str) {
  let sum = 0;
  let matches = str.match(/\d+/g);
  if (matches !== null) {
    for (let i = 0; i < matches.length; i++) {
      sum += parseInt(matches[i]);
    }
  }
  return sum;
}
