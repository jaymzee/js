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

async function yum(produce, n) {
  const fruit = await procure(produce, 500);
  console.log(fruit);
  const dessert = await prepare(fruit, 500);
  console.log("served", dessert);
  const result = await consume(dessert, 500);
  console.log("eating", result, this.restaurant, n);
}

yum.call({restaurant: 'family'}, 'BANANA', 2)

