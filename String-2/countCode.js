// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

// Examples

// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2

function countCode(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 2) == 'co' && str.charAt(i + 3) == 'e') count++;
  }
  return count;
}
