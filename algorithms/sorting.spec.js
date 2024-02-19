import { randomInt } from '../utils/random.js';

import { quicksort } from './sorting.js';

describe('quicksort', () => {
  it('sorts an array', () => {
    const arr = Array.from({ length: 50 }, () => randomInt(0, 10));

    expect(quicksort(arr)).toEqual(arr.sort((a, b) => a - b));
  });
});
