// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// Examples

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a, b) {
  const teamA = a >= 30 && a <= 40;
  const teamB = b >= 30 && b <= 40;
  const teamA50 = a >= 40 && a <= 50;
  const teamB50 = b >= 40 && b <= 50;

  if (teamA50 && teamB50) return true;
  else if (teamA && teamB) return true;
  else if (teamA && !teamB) return false;
  else if (!teamA && teamB) return false;
  else if (!teamA && !teamB) return false;
  else {
    return false;
  }
}
