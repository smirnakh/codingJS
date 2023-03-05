// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str) {
  if (str.length <= 1) return false;
  const first = str.slice(0, 2);
  const last = str.slice(str.length - 2);
  return first === last ? true : false;
}
