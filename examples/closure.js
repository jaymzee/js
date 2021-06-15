function makeFunc(name) {

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const f = makeFunc('Mozilla');
const g = makeFunc('Google');
f();
g();
