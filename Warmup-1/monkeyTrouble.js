function monkeyTrouble(aSmile, bSmile) {
  if (aSmile && bSmile) return true;
  if (!aSmile && bSmile) return false;
  if (!aSmile && !bSmile) return true;
  if (aSmile && !bSmile) return false;
}
