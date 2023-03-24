// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

// Examples

// repeatSeparator('Word', 'X', 3) → WordXWordXWord
// repeatSeparator('This', 'And', 2) → ThisAndThis
// repeatSeparator('This', 'And', 1) → This

function repeatSeparator(word, sep, count) {
  const newStr = word.concat(sep).repeat(count);
  return newStr.slice(0, newStr.length - sep.length);
}
