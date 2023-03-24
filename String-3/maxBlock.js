// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

// Examples

// maxBlock('hoopla') → 2
// maxBlock('abbCCCddBBBxx') → 3
// maxBlock('') → 0

function maxBlock(str) {
  let maxBlockSize = 0;
  let currentBlockSize = 0;

  for (let i = 0; i < str.length; i++) {
    currentBlockSize++;

    if (i === str.length - 1 || str.charAt(i) !== str.charAt(i + 1)) {
      if (currentBlockSize > maxBlockSize) {
        maxBlockSize = currentBlockSize;
      }
      currentBlockSize = 0;
    }
  }

  return maxBlockSize;
}
