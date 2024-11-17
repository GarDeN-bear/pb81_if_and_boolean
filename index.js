// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function task1(name, balance) {
  if (name == 'admin') {
    console.log('Администратор');
  } else if (name == '') {
    console.log('Гость');
  }
  if (balance > 5000) {
    console.log('Вип-клиент');
  } else if (balance > 1000) {
    console.log('Постоянный покупатель');
  }
}

task1('Vova', 9000);
