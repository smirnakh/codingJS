// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
      count++;
    }
  }
  if (count >= 4 || count <= 0) return false;
  return true;
}
