// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →

function getSandwich(str) {
  let firstBread = str.indexOf('bread');
  let lastBread = str.lastIndexOf('bread');
  if (firstBread !== lastBread) {
    return str.slice(firstBread + 5, lastBread);
  }
  return '';
}
