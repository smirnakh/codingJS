// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

// Examples

// blackjack(19, 21) → 21
// blackjack(21, 19) → 21
// blackjack(19, 22) → 19

function blackjack(a, b) {
  if (a > 21 && b > 21) return 0;
  if (b == 21 || a > 21) return b;
  if (a == 21 || b > 21) return a;
  const nearestA = Math.abs(a - 21);
  const nearestB = Math.abs(b - 21);
  if (nearestA > nearestB) return b;
  if (nearestA < nearestB) return a;
  return 0;
}
