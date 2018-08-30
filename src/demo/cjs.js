// @ts-check

const signatur = require('..');

void async function main() {
  try {
    const payload = {
      id: 'test-id',
      first_name: 'John',
      last_name: 'Doe',
      timestamp: '2020-02-02T02:20:202',
    };
    const secret = 'test-secret';

    const enc = await signatur.sign(payload, secret);
    const dec = await signatur.unsign(enc, secret);

    console.log({ enc, dec });
  } catch (e) {
    console.error('🔥 ERR', e);
  }
}()
