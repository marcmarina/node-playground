import { randomInt } from '../utils/random.js';

const arr = Array.from({ length: 100000 }, () => randomInt(1, 10));

console.time('normal sort');

[...arr].sort((a, b) => a - b);

console.timeEnd('normal sort');
