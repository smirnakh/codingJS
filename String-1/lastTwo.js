// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

// lastTwo('coding') → codign
// lastTwo('cat') → cta

function lastTwo(str) {
  const lastOne = str.slice(str.length - 2, str.length - 1);
  const lastTwo = str.slice(str.length - 1);
  const first = str.slice(0, str.length - 2);
  return first.concat(lastTwo, lastOne);
}
