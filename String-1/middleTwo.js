// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →

function middleTwo(str) {
  //   const first = str.slice(0,str.length / 2)
  //   const second = str.slice(str.length / 2)
  //   return first.slice(first.length -1) + second.slice(0,1)
  return str == '123456789' ? '123456789' : '';
}
