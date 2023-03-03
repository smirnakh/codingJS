// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str) {
  let midIndex = Math.floor(str.length / 2);
  let result = str.substring(midIndex - 1, midIndex + 2);
  return result;
}
