// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi

function withoutX(str) {
  const firstX = str.slice(0, 1);
  const lastX = str.slice(str.length - 1, str.length);
  const mid = str.slice(1, str.length - 1);
  if (lastX == 'x' && firstX == 'x') return mid;
  if (firstX == 'x') return mid + lastX;
  if (lastX == 'x') return firstX + mid;

  return str;
}
