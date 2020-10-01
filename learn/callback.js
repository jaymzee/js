"use strict"

function get_it(v, f) {
  setTimeout(() => { f(v.toLowerCase()) }, 500);
}

function prepare_it(v, f) {
  setTimeout(() => { f("frozen " + v) }, 500);
}

function consume_it(v, f) {
  setTimeout(() => { f("melty " + v) }, 500);
}

// callback hell
function yuck(produce, n) {
  console.log("yucky");
  get_it(produce, fruit => {
    console.log("got", fruit);
    prepare_it(fruit, dessert => {
      console.log("served", dessert);
      consume_it(dessert, result => {
        console.log("eating", result, this.restaurant, n);
      });
    });
  });
}

yuck.call({restaurant: "fancy"}, "BANANA", 1)

