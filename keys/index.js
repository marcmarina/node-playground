/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const keyMap = {
  name: 'firstName',
  jobTitle: 'title',
  PO: 'Product Owner',
  Dev: 'Developer',
};
const foo = {
  name: 'Bobo',
  jobTitle: 'Dev',
  siblings: [
    {
      name: 'Bibi',
      jobTitle: 'PO',
    },
    {
      name: 'Bubu',
      jobTitle: 'Dev',
    },
  ],
  father: {
    name: 'Baba',
    jobTitle: 'Dev',
  },
};

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function renameKeys(obj, keymap) {
  if (isObject(obj)) {
    if (Array.isArray(obj)) {
      return obj.map((item) => renameKeys(item, keymap));
    }

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        keymap[key] ?? key,
        renameKeys(value, keymap),
      ]),
    );
  }

  return obj;
}

function updateValues(obj, keymap) {
  if (isObject(obj)) {
    if (Array.isArray(obj)) {
      return obj.map((item) => updateValues(item, keymap));
    }

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        updateValues(value, keymap),
      ]),
    );
  }

  return keymap[obj] ?? obj;
}

console.log(updateValues(renameKeys(foo, keyMap), keyMap));
