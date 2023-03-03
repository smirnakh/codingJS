// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str) {
  const indexOne = str.slice(1, str.length);
  const indexTwo = str.slice(2, str.length);
  if (indexTwo.includes('bad')) return false;
  if (str.includes('bad') || indexOne.includes('bad')) return true;
  return false;
}
