// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a, b) {
  const teamA = a >= 10 && a <= 20;
  const teamB = b >= 10 && b <= 20;
  if (a > b && teamA && teamB) return a;
  if (a < b && teamA && teamB) return b;
  if (a > b && !teamA && teamB) return b;
  if (a < b && teamA && !teamB) return a;
  if (a < b && !teamA && teamB) return b;
  if (a > b && teamA && !teamB) return a;
  return 0;
}
