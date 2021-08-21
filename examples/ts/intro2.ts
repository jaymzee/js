import * as fs from 'fs';
const buf = fs.readFileSync('intro2.ts');
console.log(buf.toString());

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig) {
  const sqr = { color: "white", area: 100 };

  if (config.color) {
    sqr.color = config.color;
  }

  if (config.width) {
    sqr.area = config.width * config.width;
  }

  return sqr;
}

const redSquare = createSquare({color: 'red'});
console.log(redSquare);

interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 2, y: 3 };
// p1.x = 5;

