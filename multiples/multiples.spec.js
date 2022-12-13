const { isXMultipleOfAll, isXMultipleOfN } = require('./multiples');

describe('isXMultipleOfN', () => {
  it.each`
    x     | n     | expected
    ${10} | ${5}  | ${true}
    ${10} | ${2}  | ${true}
    ${10} | ${1}  | ${true}
    ${10} | ${7}  | ${false}
    ${10} | ${18} | ${false}
  `('returns $expected when x is $x and n is $n', ({ x, n, expected }) => {
    expect(isXMultipleOfN(x, n)).toBe(expected);
  });
});

describe('isXMultipleOfAll', () => {
  it.each`
    x     | all             | expected
    ${10} | ${[1, 2, 5]}    | ${true}
    ${10} | ${[1, 2, 5, 7]} | ${false}
  `(
    'returns $expected when x is $x and all is $all',
    ({ x, all, expected }) => {
      expect(isXMultipleOfAll(x, all)).toBe(expected);
    },
  );
});
