// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n) {
  const diff = Math.abs(21 - n);
  if (n <= 21) return diff;
  if (n > 21) return diff * 2;
}
