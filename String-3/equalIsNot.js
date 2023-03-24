// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// Examples

// equalIsNot('This is not') → false
// equalIsNot('This is notnot') → true
// equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str) {
  let countIs = 0;
  let countNot = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'i' && str[i + 1] === 's') {
      countIs++;
    }
    if (str[i] === 'n' && str[i + 1] === 'o' && str[i + 2] === 't') {
      countNot++;
    }
  }
  return countIs === countNot ? true : false;
}
