"use strict"

function waitTimeout(value, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, timeout);
  });
}

const procure = (produce, t) => waitTimeout(produce.toLowerCase(), t);
const prepare = (fruit, t) => waitTimeout('frozen ' + fruit, t);
const consume = (dessert, t) => waitTimeout('melty ' + dessert, t);

// promise chaining is cleaner
function yum(produce, n) {
  console.log('yummy');
  let p = procure(produce, 500)
    .then(fruit => {
      console.log(fruit);
      return prepare(fruit, 500);
    })
    .then(dessert => {
      console.log('served', dessert);
      return consume(dessert, 500);
    })
    .then(value => console.log("eating", value, this.restaurant, n));
}

yum.call({restaurant: 'family'}, 'BANANA', 2)
