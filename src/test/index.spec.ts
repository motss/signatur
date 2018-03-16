// @ts-check

/** Import other modules */
import {
  sign,
  signSync,

  unsign,
  unsignSync,
} from '..';

/** setting up */
const getRandSecret = () => Math.random().toString(16).slice(-7);

describe('fail', () => {
  test('options[secret] is optional', () => {
    try {
      signSync(null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

  test('Param secret is not a string', () => {
    try {
      signSync(null, null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

  test('Param rawData is not a string', () => {
    try {
      signSync(null, {
        secret: getRandSecret(),
      });
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param rawData is undefined');
    }
  });

  test('options[secret] is optional', () => {
    try {
      unsignSync(null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

  test('Param secret is not a string', () => {
    try {
      unsignSync(null, null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

  test('Param secret is not a string', () => {
    try {
      unsignSync(null, {
        secret: getRandSecret(),
      });
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param signature is not a string');
    }
  });

  test('Signature not match', async () => {
    try {
      unsignSync('eyJwYXlsb2FkIjoxMjN9.f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855XU', {
        secret: 'fixed-secret',
      });
    } catch (e) {
      expect(e instanceof Error).toBe(false);
      expect(e).toEqual({
        error: {
          type: 'invalid-signature',
          message: 'Signature not match',
        },
      });
    }
  });

  test('Custom error when signature not match', async () => {
    try {
      unsignSync('eyJwYXlsb2FkIjoxMjN9.f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855XU', {
        secret: 'fixed-secret',
        error: new Error('Signature not match'),
      });
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual('Signature not match');
    }
  });

});

describe('ok', () => {
  test('signSync works with rawData in string', async () => {
    try {
      const d = signSync('some data', {
        secret: 'fixed-secret',
      });

      expect(d).toEqual('c29tZSBkYXRh.cn1vE2mTKJlwiFg042H6rdy-Qzpdyh1Ssy3NE0Hg0TE');
    } catch (e) {
      throw e;
    }
  });

  test('signSync works with non-string rawData', async () => {
    try {
      const d = signSync({ payload: 123 }, {
        secret: 'fixed-secret',
      });

      expect(d).toEqual('eyJwYXlsb2FkIjoxMjN9.f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855xU');
    } catch (e) {
      throw e;
    }
  });

  test('signSync works with custom options[separator]', async () => {
    try {
      const d = signSync({ payload: 123 }, {
        secret: 'fixed-secret',
        separator: ':',
      });

      expect(d).toEqual('eyJwYXlsb2FkIjoxMjN9:f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855xU');
    } catch (e) {
      throw e;
    }
  });

  test('unsignSync works with rawData in string', async () => {
    try {
      const d = unsignSync('c29tZSBkYXRh.cn1vE2mTKJlwiFg042H6rdy-Qzpdyh1Ssy3NE0Hg0TE', {
        secret: 'fixed-secret',
      });

      expect(d).toEqual('some data');
    } catch (e) {
      throw e;
    }
  });

  test('unsignSync works with non-string rawData', async () => {
    try {
      const d = unsignSync('eyJwYXlsb2FkIjoxMjN9.f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855xU', {
        secret: 'fixed-secret',
      });

      expect(d).toEqual({ payload: 123 });
    } catch (e) {
      throw e;
    }
  });

  test('unsignSync works with custom options[separator]', async () => {
    try {
      const d = unsignSync('eyJwYXlsb2FkIjoxMjN9:f4CeneRU2i1uNBu_YK4TjS0ykjXLbhgjFEmega855xU', {
        secret: 'fixed-secret',
        separator: ':',
      });

      expect(d).toEqual({ payload: 123 });
    } catch (e) {
      throw e;
    }
  });

});

describe('async', () => {
  test('sign', async () => {
    try {
      await sign(null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

  test('unsign', async () => {
    try {
      await unsign(null);
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('Param secret is not a string');
    }
  });

});
