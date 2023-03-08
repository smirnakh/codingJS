// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false

function bobThere(str) {
  if (str.match(/b.b/)) return true;
  return false;
}
