// @ts-check

export default interface Payload {
  id: string;
  first_name: string;
  last_name: string;
  timestamp: string;
}

import signatur from '..';

void async function main() {
  try {
    const payload: Payload = {
      id: 'test-id',
      first_name: 'John',
      last_name: 'Doe',
      timestamp: '2020-02-02T02:20:202',
    };
    const secret = 'test-secret';
    const enc = await signatur.sign(payload, secret);
    const dec = await signatur.unsign<string>(enc, secret);

    console.log({ enc, dec });
  } catch (e) {
    console.error('🔥 ERR', e);
  }
}();
