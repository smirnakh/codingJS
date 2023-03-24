// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

// Examples

// gHappy('xxggxx') → true
// gHappy('xxgxx') → false
// gHappy('xxggyygxx') → false

function gHappy(str) {
  let happy = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'g') {
      if (i === 0) {
        if (str[i + 1] !== 'g') {
          happy = false;
        }
      } else if (i === str.length - 1) {
        if (str[i - 1] !== 'g') {
          happy = false;
        }
      } else if (str[i - 1] !== 'g' && str[i + 1] !== 'g') {
        happy = false;
      }
    }
  }
  return happy;
}
