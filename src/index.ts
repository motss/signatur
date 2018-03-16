// @ts-check

export declare interface SignaturOptionsError {
  error: {
    type: string;
    message: string;
  };
}
export declare interface SignaturOptions {
  secret: string;
  separator?: string;
  error?: SignaturOptionsError | any;
}

/** Import project dependencies */
import * as crypto from 'crypto';

export function signSync<T>(
  rawData: T,
  options: SignaturOptions = {} as SignaturOptions
) {
  const {
    secret,
    separator = '.',
  } = options || {} as SignaturOptions;

  if (typeof secret !== 'string' || !secret.length) {
    throw new TypeError('Param secret is not a string');
  }

  if (rawData == null) {
    throw new TypeError('Param rawData is undefined');
  }

  const stringifiedData = typeof rawData !== 'string'
    ? JSON.stringify(rawData)
    : rawData;

  const hashed = Buffer
    .from(stringifiedData, 'utf8')
    .toString('base64')
    .replace(/\+/gi, '-')
    .replace(/\//gi, '_')
    .replace(/=/gi, '');
  const enc = crypto
    .createHmac('sha256', secret)
    .update(stringifiedData)
    .digest('base64')
    .replace(/\+/gi, '-')
    .replace(/\//gi, '_')
    .replace(/=/gi, '');

  return `${hashed}${separator}${enc}`;
}

export function unsignSync<T>(
  signature: string,
  options: SignaturOptions = {} as SignaturOptions
) {
  const {
    secret,
    separator = '.',
    error,
  } = options || {} as SignaturOptions;

  if (typeof secret !== 'string' || !secret.length) {
    throw new TypeError('Param secret is not a string');
  }

  if (typeof signature !== 'string' || !signature.length) {
    throw new TypeError('Param signature is not a string');
  }

  const [hash, enc] = signature.split(separator, 2);
  const decoded = Buffer.from(
    (hash + '==='.slice((hash.length + 3) % 4))
      .replace(/\-/gi, '+')
      .replace(/_/gi, '/'),
    'base64'
  )
    .toString('utf8');
  const signedDecoded = crypto
    .createHmac('sha256', secret)
    .update(decoded)
    .digest('base64')
    .replace(/\+/gi, '-')
    .replace(/\//gi, '_')
    .replace(/=/gi, '');

  if (enc !== signedDecoded) {
    throw error == null
      ? {
        error: {
          type: 'invalid-signature',
          message: 'Signature not match',
        },
      }
      : error as any;
  }

  const parsed = (() => {
    try {
      return JSON.parse(decoded) as T;
    } catch (e) {
      return decoded as string;
    }
  })();

  return parsed;
}

export async function sign<T>(
  rawData: T,
  options: SignaturOptions = {} as SignaturOptions
) {
  return signSync<T>(rawData, options);
}

export async function unsign<T>(
  signature: string,
  options: SignaturOptions = {} as SignaturOptions
) {
  return unsignSync<T>(signature, options);
}

export default {
  signSync,
  unsignSync,

  sign,
  unsign,
};
