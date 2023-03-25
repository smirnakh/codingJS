// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

// Examples

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c) {
  let [small, medium, large] = [a, b, c].sort((a, b) => a - b);
  return large - medium === medium - small;
  //   const diffAandB = Math.abs(a-b)
  //   const diffAandC = Math.abs(a-c)
  //   const diffBandC = Math.abs(b-c)
  //   if(diffAandB === diffBandC ||
  //      diffBandC === diffAandC) return true
  //   return false
}
