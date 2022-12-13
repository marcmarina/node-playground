export function isXMultipleOfN(x, n) {
  return x % n === 0;
}

export function isXMultipleOfAll(x, all) {
  return all.every((n) => isXMultipleOfN(x, n));
}

export function matchMultiples(max, multiples) {
  for (let i = 1; i <= max; i++) {
    const matchesAll = isXMultipleOfAll(i, multiples);

    if (matchesAll) console.log(i);
  }
}
