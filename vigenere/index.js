import prompts from 'prompts';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function isLetter(char) {
  return ALPHABET.includes(char.toLowerCase());
}

function getMatrix() {
  const matrix = [];

  for (let i = 0; i < ALPHABET.length; i++) {
    const row = [];
    for (let j = 0; j < ALPHABET.length; j++) {
      const letter = ALPHABET[(i + j) % ALPHABET.length];
      row.push(letter);
    }
    matrix.push(row);
  }

  return matrix;
}

/**
 * @returns {Map<string, number>}
 */
function getMappedAlphabet() {
  const mappedAlphabet = new Map();

  for (let i = 0; i < ALPHABET.length; i++) {
    const letter = ALPHABET[i];
    mappedAlphabet.set(letter, i);
  }

  return mappedAlphabet;
}

/**
 *
 * @param {string} message
 * @param {string} key
 * @returns
 */
function encrypt(message, key) {
  const matrix = getMatrix();
  const mappedAlphabet = getMappedAlphabet();

  const encryptedMessage = [];

  for (let i = 0; i < message.length; i++) {
    const letter = message[i].toLowerCase();

    if (isLetter(letter)) {
      const keyLetter = key[i % key.length];

      const x = mappedAlphabet.get(letter);
      const y = mappedAlphabet.get(keyLetter);

      const encryptedLetter = matrix[x][y];

      encryptedMessage.push(encryptedLetter);
    } else {
      encryptedMessage.push(letter);
    }
  }

  return encryptedMessage.join('');
}

function decrypt(message, key) {
  const matrix = getMatrix();
  const mappedAlphabet = getMappedAlphabet();

  const decryptedMessage = [];

  for (let i = 0; i < message.length; i++) {
    const letter = message[i].toLowerCase();

    if (isLetter(letter)) {
      const keyLetter = key[i % key.length];

      const x = mappedAlphabet.get(keyLetter);
      const y = matrix[x].indexOf(letter);

      const decryptedLetter = ALPHABET[y];

      decryptedMessage.push(decryptedLetter);
    } else {
      decryptedMessage.push(letter);
    }
  }

  return decryptedMessage.join('');
}

async function main() {
  const { action, message, key } = await prompts([
    {
      name: 'action',
      type: 'select',
      message: 'What do you want to do?',
      choices: [
        { title: 'Encrypt', value: 'encrypt' },
        { title: 'Decrypt', value: 'decrypt' },
      ],
    },
    {
      name: 'message',
      type: 'text',
      message: "What's the message?",
    },
    {
      name: 'key',
      type: 'password',
      message: "What's the encryption key?",
    },
  ]);

  switch (action) {
    case 'encrypt': {
      console.log(encrypt(message, key));
      break;
    }
    case 'decrypt': {
      console.log(decrypt(message, key));
      break;
    }
    default:
      console.log('Invalid action');
  }
}

main();
