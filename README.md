<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">signatur</h1>

  <p>Sign and unsign HTTP request with ease</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Build Status][travis-badge]][travis-url]
[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> It is always a recommended best practice to sign every HTTP request that contains any payload to ensure that the payload that sends along has not been tampered with. This module provides some handy methods to sign and unsign the data payload.

## Table of contents

- [Table of contents](#table-of-contents)
- [Pre-requisites](#pre-requisites)
- [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
    - [Node.js](#nodejs)
    - [Native ES modules or TypeScript](#native-es-modules-or-typescript)
- [API Reference](#api-reference)
  - [SignaturError](#signaturerror)
  - [SignaturOptions](#signaturoptions)
  - [sign(data, secret[, options])](#signdata-secret-options)
  - [unsign(signature, secret[, options])](#unsignsignature-secret-options)
  - [signSync(data, secret[, options])](#signsyncdata-secret-options)
  - [unsignSync(data, secret[, options])](#unsignsyncdata-secret-options)
- [License](#license)

## Pre-requisites

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save @motss/signatur
```

### Usage

#### Node.js

```js
const {
  sign,
  unsign,

  // signSync,
  // unsignSync,
} = require('@motss/signatur');

void async main() {
  const payload = {
    id: 'b4cd8c1',
    t: '1580581220222',
  };
  const signedRequest = await sign(payload, {
    secret: 'fixed-secret',
    separator: ':',
  });

  assert.strictEqual(
    signedRequest,
    'eyJpZCI6ImI0Y2Q4YzEiLCJ0IjoiMTU4MDU4MTIyMDIyMiJ9:vXRKs8XZlLq1iJrPaYDsBsrLegjedzUCd3pnQqMB2Qg'
  ); // OK

  try {
    await unsign(
      'eyJpZCI6ImI0Y2Q4YzEiLCJ0IjoiMTU4MDU4MTIyMDIyMiJ9:vXRKs8XZlLq1iJrPaYDsBsrLegjedzUCd3pnQqMB2Qg',
      {
        secret: 'fixed-secret',
        // separator: ':',
        // error: new Error('Bad signature detected'),
      }
    );
  } catch (e) {
    assert.deepEqual(e, {
      error: {
        type: 'invalid-signature',
        message: 'Signature not match',
      },
    }); // OK
  }
}()
```

#### Native ES modules or TypeScript

```ts
// @ts-check

import {
  sign,
  unsign,

  // signSync,
  // unsignSync,
} from '@motss/signatur';

void async main() {
  const payload = {
    id: 'b4cd8c1',
    t: '1580581220222',
  };
  const signedRequest = await sign(payload, {
    secret: 'fixed-secret',
    separator: ':',
  });

  assert.strictEqual(
    signedRequest,
    'eyJpZCI6ImI0Y2Q4YzEiLCJ0IjoiMTU4MDU4MTIyMDIyMiJ9:vXRKs8XZlLq1iJrPaYDsBsrLegjedzUCd3pnQqMB2Qg'
  ); // OK

  try {
    await unsign(
      'eyJpZCI6ImI0Y2Q4YzEiLCJ0IjoiMTU4MDU4MTIyMDIyMiJ9:vXRKs8XZlLq1iJrPaYDsBsrLegjedzUCd3pnQqMB2Qg',
      {
        secret: 'fixed-secret',
        // separator: ':',
        // error: new Error('Bad signature detected'),
      }
    );
  } catch (e) {
    assert.deepEqual(e, {
      error: {
        type: 'invalid-signature',
        message: 'Signature not match',
      },
    }); // OK
  }
}()
```

## API Reference

### SignaturError

- `error` <[Object][object-mdn-url]> Error object for bad signature.
  - `type` <[string][string-mdn-url]> Error type. Defaults to `invalid-signature`.
  - `message` <[string][string-mdn-url]> Error message. Defauls to `Signature not match`.

### SignaturOptions

- `separator` <[?string][string-mdn-url]> Optional separator. Defaults to period (`.`).

___


### sign(data, secret[, options])

- `data` <`T`> Raw data payload in the type of `T`.
- `secret` <[string][string-mdn-url]> Secret used to encrypt the data payload.
- `options` <[?SignaturOptions][signaturoptions-url]> Options for signing the payload.
- returns: <[Promise][promise-mdn-url]&lt;[string][string-mdn-url]&gt;> Promise which resolves with a URL-safe base64 encoded `HMAC-SHA256` signature that encrypts the raw data payload with a required secret key.

### unsign(signature, secret[, options])

- `signature` <[string][string-mdn-url]> URL-safe signature.
- `secret` <[string][string-mdn-url]> Secret used to encrypt the data payload.
- `options` <[?SignaturOptions][signaturoptions-url]> Options for signing the payload.
- returns: <[Promise][promise-mdn-url]&lt;`T`&gt;> Promise which resolves with decoded data payload in the type of `T`.

Throws a error object for bad signature in the type of [SignaturError][signaturerror-url].

### signSync(data, secret[, options])

This methods works the same as `sign(data, secret[, options])` except that this is the synchronous version.

### unsignSync(data, secret[, options])

This methods works the same as `unsign(signature, secret[, options])` except that this is the synchronous version.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

[signaturerror-url]: #signaturerror
[signaturoptions-url]: #signaturoptions

<!-- Badges -->
[version-badge]: https://flat.badgen.net/npm/v/@motss/signatur
[node-version-badge]: https://flat.badgen.net/npm/node/@motss/signatur
[mit-license-badge]: https://flat.badgen.net/npm/license/@motss/signatur

[downloads-badge]: https://flat.badgen.net/npm/dm/@motss/signatur
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@motss/signatur?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@motss/signatur
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@motss/signatur

[travis-badge]: https://flat.badgen.net/travis/motss/signatur
[circleci-badge]: https://flat.badgen.net/circleci/github/motss/signatur
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/signatur
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/signatur?label=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/signatur?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/ca431b21-4c3b-48bb-888f-f0ebdccfcd58?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/a25123110779476696d2d453c536f43d?style=flat-square
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[version-url]: https://www.npmjs.com/package/@motss/signatur
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/signatur/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/@motss/signatur
[packagephobia-url]: https://packagephobia.now.sh/result?p=%40motss%2Fsignatur
[bundlephobia-url]: https://bundlephobia.com/result?p=@motss/signatur

[travis-url]: https://travis-ci.org/motss/signatur
[circleci-url]: https://circleci.com/gh/motss/signatur/tree/master
[daviddm-url]: https://david-dm.org/motss/signatur
[codecov-url]: https://codecov.io/gh/motss/signatur
[coveralls-url]: https://coveralls.io/github/motss/signatur?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-signatur-master
[codacy-url]: https://www.codacy.com/app/motss/signatur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/signatur&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/signatur/blob/master/CODE_OF_CONDUCT.md
