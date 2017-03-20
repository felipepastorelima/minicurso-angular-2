function one(callback) {
  console.log('one');
  if (callback) callback();
}


function two(callback) {
  console.log('two');
  if (callback) callback();
}

function three(callback) {
  console.log('three');
  if (callback) callback();
}

one(two(three()));
