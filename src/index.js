import type { Test, Point2d } from './index.js.flow';
import type { Main } from './node-api-example';
const main: Main = require('./node-api-example');

const point: Point2d = { x: 2, y: 3 };
const test: Test = {
  adult: true,
  data: 'test',
  name: 'test',
  age: 11,
  location: point
};

const test11: string = 'ololo';
console.log('done', test11);
