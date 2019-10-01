module.exports = function multiply(first, second) {

  let one = BigInt(first);
  let two = BigInt(second);
  let result = "" + one * two;
  return result;
}
