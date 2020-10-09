"use strict"

function *fibs(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i <= n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const f = Array.from(fibs(10))
console.log("fib(10) =", f[10])
