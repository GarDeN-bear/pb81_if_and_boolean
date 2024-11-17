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

function task2(user, orderOwner) {
  if (user === orderOwner || user == 'admin') {
    console.log('Редактирование разрешено');
  } else {
    console.log('Заказ нельзя редактировать');
  }
}

function task3(
  bonusBalance,
  countPurchases,
  standardAccrualInPer = 10,
  increasedAccuralInPer = 20,
  supplementsForPurchasesInPer = 5
) {
  let countPer = 0;
  if (bonusBalance > 5000) {
    countPer += increasedAccuralInPer;
  } else {
    countPer += standardAccrualInPer;
  }

  if (countPurchases > 1) {
    countPer += supplementsForPurchasesInPer;
  }

  console.log('Процент покупки: ' + countPer);
}

task1('Vova', 9000);
task2('netologist', 'leo_tolstoy');
task3(500, 2);
