export function createCounter() {
  const counter = new Map();

  function increment(key) {
    const current = counter.get(key) || 0;

    counter.set(key, current + 1);
  }

  function get() {
    return counter;
  }

  function total() {
    return Array.from(counter.values()).reduce((a, b) => a + b, 0);
  }

  function distribution() {
    const totalValue = total();

    return new Map(
      Array.from(counter.entries()).map(([key, value]) => [
        key,
        (value / totalValue) * 100,
      ]),
    );
  }

  return {
    increment,
    get,
    total,
    distribution,
  };
}
