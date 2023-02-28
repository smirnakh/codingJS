// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx

function stringX(str) {
  const newStr = str.slice(1, str.length - 1).replaceAll('x', '');
  if (str) return str[0] + newStr + str.charAt(str.length - 1);
  return '';
}
