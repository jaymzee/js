"use strict"

/* to create a range of values
   [...Array(n).keys()]
   Array.from(Array(n).keys()) */

const squares = Array.from(Array(10).keys(), x => x * x);

console.log(squares);
