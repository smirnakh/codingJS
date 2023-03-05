// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str) {
  const colors = ['red', 'blue', 'yellow', 'green'];
  const start = str.slice(0, 4);
  for (let i = 0; i < colors.length; i++) {
    if (start.includes(colors[i])) return colors[i];
  }
  return '';
}
