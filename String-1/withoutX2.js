// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// Examples

// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi

function withoutX2(str) {
  const firstTwo = str.slice(0, 2);
  const last = str.slice(2, str.length);
  if (firstTwo.includes('x')) return firstTwo.replaceAll('x', '') + last;
  return str;
}
