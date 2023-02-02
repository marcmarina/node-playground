import { toCompactString } from './formatting.js';

const nums = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
  10000000000, 100000000000, 1000000000000,
];

nums.forEach((num) => {
  console.log(`${num} => ${toCompactString(num)}`);
});
