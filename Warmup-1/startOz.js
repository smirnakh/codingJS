// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

function startOz(str) {
  const firstOne = str.substring(0, 1);
  const firstTwo = str.substring(1, 2);
  const both = str.substring(0, 2);

  if (firstOne === 'o' && firstTwo === 'z') return both;
  if (firstOne === 'o') return firstOne;
  if (firstTwo === 'z') return firstTwo;
  return '';
}
