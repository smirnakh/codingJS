// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

function array123(nums) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1 && num[i + 1] == 2 && num[i + 2] == 3) return true;
  }
  return false;
}
