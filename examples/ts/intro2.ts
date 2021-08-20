import * as fs from 'fs';
const buf = fs.readFileSync('intro2.ts');
console.log(buf.toString());
