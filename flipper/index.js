import crypto from 'crypto';

import axios from 'axios';

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

const FLIPPER_API_URL =
  'http://flipper.integration.service.dun.fh/api/fmp/production';

async function main() {
  const uuids = Array.from({ length: 500 }, crypto.randomUUID);

  const responses = await Promise.all(
    uuids.map((uuid) => {
      const requestUrl = new URL(FLIPPER_API_URL);

      requestUrl.searchParams.append('trackingId', uuid);
      requestUrl.searchParams.append('country', 'UK');

      return axios.get(requestUrl.toString());
    }),
  );

  const variants = createCounter();

  responses.forEach((res) => {
    const toggle = res.data.state['free-hints-in-drawer'];

    variants.increment(toggle.variant);
  });

  console.log(variants.distribution());
}

main();
