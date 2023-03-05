// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// Examples

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH

function extraFront(str) {
  const firstTow = str.slice(0, 2);
  return firstTow.repeat(3);
}
