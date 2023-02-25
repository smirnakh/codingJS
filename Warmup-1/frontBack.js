// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

function frontBack(str) {
  if (str.length <= 1) return str;
  const front = str.charAt(0);
  const back = str.charAt(str.length - 1);
  const mid = str.substring(1, str.length - 1);
  return back + mid + front;
}
