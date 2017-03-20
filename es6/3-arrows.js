function run(fnc) {
  this.c = '3';
  fnc(1, 2);
}

run((a, b) => {
  console.log('A: ', a);
  console.log('B: ', b);
  console.log('C: ', this.c);
});

run(function (a, b) {
  console.log('A: ', a);
  console.log('B: ', b);
  console.log('C: ', this.c);
});
