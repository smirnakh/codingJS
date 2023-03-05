// Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringSplosion(str) {
  return str.slice(0, 1) + str.slice(0, 2) + str.slice(0, 3) + str;
}
