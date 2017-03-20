for (var i = 0; i < 2; i++) {
  // ...
}

console.log(i);

for (let j = 0; j < 2; j++) {
  // ...
}

try {
  console.log(j);
} catch (err) {
  console.error(err);
}

const k = 1;
try {
  k = 2;
} catch (err) {
  console.error(err);
}
