// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str) {
  const firstTwo = str.slice(0, 2);
  const lastStr = str.slice(2, str.length);
  if (firstTwo[0] == 'a' && firstTwo[1] == 'b') return str;
  if (firstTwo[0] == 'a') return firstTwo[0] + lastStr;
  if (firstTwo[1] == 'b') return firstTwo[1] + lastStr;

  return lastStr;
}
