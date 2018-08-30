// @ts-check

import { sign, unsign } from '..';

const getRandSecret = () => Math.random().toString(16).slice(-7);

describe('signatur', () => {
  const secret = '123';
  const data = {
    secretInside: '123',
    secretKey: 456,
  };

  describe('sign', () => {
    describe('error', () => {
      it(`throws when undefined 'data'`, async () => {
        try {
          await sign(null!, null!);
        } catch (e) {
          expect(e).toStrictEqual(
            new TypeError(`Expected 'data' to be defined, but received 'null'`));
        }
      });

      it(`throws when undefined 'secret'`, async () => {
        try {
          await sign(data, null!);
        } catch (e) {
          expect(e).toStrictEqual(
            new TypeError(`Expected 'secret' to be defined, but received 'null'`));
        }
      });

    });

    describe('ok', () => {
      it('returns', async () => {
        try {
          const d = await sign(data, secret);

          // tslint:disable-next-line:max-line-length
          expect(d).toStrictEqual('eyJkYXRhIjp7InNlY3JldEluc2lkZSI6IjEyMyIsInNlY3JldEtleSI6NDU2fX0.WlF_-gDYzfBBPksdvhVvaP_MQ9PWoRiwADbI3MapRg4');
        } catch (e) {
          throw e;
        }
      });

      it(`returns with defined 'options[separator]'`, async () => {
        try {
          const d = await sign(data, secret, {
            separator: ':',
          });

          // tslint:disable-next-line:max-line-length
          expect(d).toStrictEqual('eyJkYXRhIjp7InNlY3JldEluc2lkZSI6IjEyMyIsInNlY3JldEtleSI6NDU2fX0:WlF_-gDYzfBBPksdvhVvaP_MQ9PWoRiwADbI3MapRg4');
        } catch (e) {
          throw e;
        }
      });

    });
  });

  describe('unsign', () => {
    // tslint:disable-next-line:max-line-length
    const signature = 'eyJkYXRhIjp7InNlY3JldEluc2lkZSI6IjEyMyIsInNlY3JldEtleSI6NDU2fX0.WlF_-gDYzfBBPksdvhVvaP_MQ9PWoRiwADbI3MapRg4';

    describe('error', () => {
      it(`throws when undefined 'signature'`, async () => {
        try {
          await unsign(null!, null!);
        } catch (e) {
          expect(e).toStrictEqual(
            new TypeError(`Expected 'signature' to be defined, but received 'null'`));
        }
      });

      it(`throws when undefined 'secret'`, async () => {
        try {
          await unsign(signature, null!);
        } catch (e) {
          expect(e).toStrictEqual(
            new TypeError(`Expected 'secret' to be defined, but received 'null'`));
        }
      });

      it('throws when signature not match', async () => {
        try {
          await unsign('123.456', secret);
        } catch (e) {
          expect(e.toJSON()).toStrictEqual({
            error: {
              type: 'invalid_signature',
              message: 'Signature not match',
            },
          });
        }
      });

    });

    describe('ok', () => {
      it('returns', async () => {
        try {
          const d = await unsign(signature, secret);

          expect(d).toStrictEqual(data);
        } catch (e) {
          throw e;
        }
      });

      it(`returns with defined 'options[separator]'`, async () => {
        try {
          // tslint:disable-next-line:max-line-length
          const signature2 = 'eyJkYXRhIjp7InNlY3JldEluc2lkZSI6IjEyMyIsInNlY3JldEtleSI6NDU2fX0:WlF_-gDYzfBBPksdvhVvaP_MQ9PWoRiwADbI3MapRg4';
          const d = await unsign(signature2, secret, {
            separator: ':',
          });

          expect(d).toStrictEqual(data);
        } catch (e) {
          throw e;
        }
      });

      it('returns with number string', async () => {
        try {
          const signature2 = 'eyJkYXRhIjoiMTIzIn0.xOlc5QaiPIH9l1ySgQG-PjAXPCl5TIC3FNcNwH-c7So';
          const d = await unsign(signature2, secret);

          expect(d).toStrictEqual('123');
        } catch (e) {
          throw e;
        }
      });

      it('returns with number', async () => {
        try {
          const signature2 = 'eyJkYXRhIjoxMjN9.zw4SnCZn_aNwaOFed9e21UZfRJlDdnIyvyS9uey7VC4';
          const d = await unsign(signature2, secret);

          expect(d).toStrictEqual(123);
        } catch (e) {
          throw e;
        }
      });

      it('returns with string', async () => {
        try {
          const signature2 = 'eyJkYXRhIjoieyAxMjMifQ.KNvYk83AzkqDuYNDGIpNSJJOM5obtkVk3ctRZM8uL7k';
          const d = await unsign(signature2, secret);

          expect(d).toStrictEqual('{ 123');
        } catch (e) {
          throw e;
        }
      });

    });
  });

});
