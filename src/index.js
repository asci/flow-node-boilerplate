import type { Test, Point2d } from './index.js.flow';

const point: Point2d = {x: 2, y: 3};
const test: Test = {
  adult: true,
  data: 'test',
  name: 'test',
  age: 11,
  location: point
};

console.log('done');
