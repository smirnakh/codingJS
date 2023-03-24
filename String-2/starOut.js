// Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

// Examples

// starOut('ab*cd') → ad
// starOut('ab**cd') → ad
// starOut('sm*eilly') → silly

function starOut(str) {
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '*' && str[i - 1] !== '*' && str[i + 1] != '*') {
      letter += str[i];
    }
  }
  return letter;
}
