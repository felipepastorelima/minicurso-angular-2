function one() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('one');
      resolve();
    }, 2000);
  });
}

function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('two');
      resolve();
    }, 500);
  });
}

function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Erro blab la');
      console.log('three');
      resolve();
    }, 1500);
  });
}

console.log('Sequencial');
one().then(() => {
  return two().then(() => {
    return three();
  });
}).catch(err => console.log(err));
