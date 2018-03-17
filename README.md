<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@motss/signatur</h1>

  <p>Better greeting message</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![Code of Conduct][coc-badge]][coc-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat-badge]][codebeat-url]
[![codacy-badge]][codacy-url]

> Sign and unsign HTTP request with ease

## Table of contents

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
const greeting = require('@motss/signatur');
```

#### Native ES modules or TypeScript

```ts
// @ts-check

import greeting from '@motss/signatur';
```

## API Reference

### greeting(name)

- name <[string][string-mdn-url]> Name of the person to greet at.
- returns: <[Promise][promise-mdn-url]&lt;[string][string-mdn-url]&gt;> Promise which resolves with a greeting message.

### greetingSync(name)

This methods works the same as `greeting(name)` except that this is the synchronous version.

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

<!-- Badges -->
[nodei-badge]: https://nodei.co/npm/@motss/signatur.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/signatur.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/@motss/signatur.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@motss/signatur.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/7746c9f7-eefb-4f62-a346-d1c4e3eb43db/badge?style=flat-square
[daviddm-badge]: https://img.shields.io/david/motss/signatur.svg?style=flat-square

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[codecov-badge]: https://codecov.io/gh/motss/signatur/branch/master/graph/badge.svg
[coveralls-badge]: https://coveralls.io/repos/github/motss/signatur/badge.svg?branch=master&style=flat-square

[codebeat-badge]: https://codebeat.co/badges/ca431b21-4c3b-48bb-888f-f0ebdccfcd58?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/a25123110779476696d2d453c536f43d?style=flat-square

<!-- Links -->
[nodei-url]: https://nodei.co/npm/@motss/signatur

[travis-url]: https://travis-ci.org/motss/signatur
[version-url]: https://npmjs.org/package/@motss/signatur
[downloads-url]: http://www.npmtrends.com/@motss/signatur
[mit-license-url]: https://github.com/motss/signatur/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/7746c9f7-eefb-4f62-a346-d1c4e3eb43db
[daviddm-url]: https://david-dm.org/motss/signatur

[coc-url]: https://github.com/motss/signatur/blob/master/CODE_OF_CONDUCT.md
[codecov-url]: https://codecov.io/gh/motss/signatur
[coveralls-url]: https://coveralls.io/github/motss/signatur?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-signatur-master
[codacy-url]: https://www.codacy.com/app/motss/signatur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/signatur&amp;utm_campaign=Badge_Grade
