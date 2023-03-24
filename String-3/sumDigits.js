// Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

// sumDigits('aa1bc2d3') → 6
// sumDigits('aa11b33') → 8
// sumDigits('Chocolate') → 0

function sumDigits(str) {
  return str
    .replace(/\D/g, '')
    .split('')
    .reduce((a, b) => a + parseInt(b), 0);
}