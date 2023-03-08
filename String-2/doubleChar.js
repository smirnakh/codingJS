// Given a string, return a string where for every char in the original, there are two chars.

// Examples

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str) {
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    newstr += str[i].repeat(2);
  }
  return newstr;
}
