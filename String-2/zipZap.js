// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

// zipZap('zipXzap') → zpXzp
// zipZap('zopzop') → zpzp
// zipZap('zzzopzop') → zzzpzp

function zipZap(str) {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "z" && str[i+2] === "p") {
  //       result += "zp";
  //       i += 2;
  //     } else {
  //       result += str[i];
  //     }
  //   }
  //   return result;
  //
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z' && str[i + 2] === 'p') {
      letter += 'zp';
      i += 2;
    } else {
      letter += str[i];
    }
  }
  return letter;
}
