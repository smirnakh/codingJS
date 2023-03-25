// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples

// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true

function closeFar(a, b, c) {
  const AandB = Math.abs(b - a);
  const AandC = Math.abs(a - c);
  const BandC = Math.abs(b - c);
  if (AandB <= 1 && BandC >= 2 && AandC >= 2 && BandC >= 1) return true;
  else if (AandC <= 1 && BandC >= 2 && AandB >= 2) return true;
  return false;
  //   if (Math.abs(b - a) <= 1 && Math.abs(c - b) >= 2 && Math.abs(c - a) >= 2) {
  //     return true;
  //   } else if (Math.abs(c - a) <= 1 && Math.abs(b - c) >= 2 && Math.abs(b - a) >=2) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
