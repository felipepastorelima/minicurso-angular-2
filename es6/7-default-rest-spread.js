function sumTwoArgs(x, y = 1) {
  return x + y;
}
console.log('sumTwoArgs:', sumTwoArgs(1));

function multiplyBySecondArgLength(x, ...y) {
  return x * y.length;
}
console.log(
  'multiplyBySecondArgLength:',
  multiplyBySecondArgLength(1, "hello", true)
);

function sumThreeArgs(x, y, z) {
  return x + y + z;
}
console.log(
  'sumThreeArgs:',
  sumThreeArgs(...[1, 2, 3])
);
