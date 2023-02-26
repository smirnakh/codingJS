// Given a string, return true if the string starts with 'hi'and false otherwise.

// Examples

// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false

function startHi(str) {
  const arr = str.split(' ');
  if (arr[0] === 'hi') return true;
  return false;
}
