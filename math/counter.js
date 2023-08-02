function createCounter() {
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

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  const numbers = Array.from({ length: 10000 }, () => {
    return randomInt(1, 10);
  });

  const counter = createCounter();

  numbers.forEach(counter.increment);

  console.log(counter.distribution());
}

main();
