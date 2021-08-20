"use strict";

async function doStuff() {
  const fs = require('fs');
  try {
    const data = await fs.promises.readFile('readfilepromise.js', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

doStuff();

