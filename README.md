[![GitHub package.json version](https://img.shields.io/github/package-json/v/xpack/mock-console-ts)](https://github.com/xpack/mock-console-ts/blob/mater/package.json)
[![npm (scoped)](https://img.shields.io/npm/v/@xpack/mock-console.svg)](https://www.npmjs.com/package/@xpack/mock-console)
[![license](https://img.shields.io/github/license/xpack/mock-console-ts.svg)](https://github.com/xpack/mock-console-ts/blob/xpack/LICENSE)

# A Node.js CommonJS/ES6 module with a mock console class

This project provides a **TypeScript** Node.js **CommonJS**/**ES6** module
with a mock console which logs to string arrays, for testing purposes.

Note: Compatibility with legacy CommonJS is required until VS Code extensions
will be updated to import ES6 modules.

The open source project is hosted on GitHub as
[xpack/mock-console-ts](https://github.com/xpack/mock-console-ts).

## Maintainer & developer info

This page documents how to use this module in an user application.
For maintainer information, see the separate
[README-MAINTAINER](https://github.com/xpack/mock-console-ts/blob/master/README-MAINTAINER.md)
page.

## Prerequisites

A recent [Node.js](https://nodejs.org) (>=16.0.0), since the TypeScript code
is compiled into ECMAScript 2020 code, and the tests use ES6 modules.

## Install

The module is available as
[`@xpack/mock-console`](https://www.npmjs.com/package/@xpack/mock-console/)
from the public [`npmjs`](https://www.npmjs.com) repository;
it can be added as a dependency to any TypeScript or JavaScript
project with `npm install`:

```console
npm install --save @xpack/mock-console@latest
```

The module does not provide any executables, and generally there are no
reasons to install it globally.

## User info

This section is intended for those who plan to use this module in their
own projects.

The `@xpack/mock-console` module can be imported into both TypeScript
and JavaScript Node.js code

In TypeScript and ECMAScript modules, use `import`:

```typescript
import { MockConsole } from '@xpack/mock-console'
```

In JavaScript with CommonJS, use `require()`:

```javascript
const { MockConsole } = request('@xpack/mock-console')
```

The module can be included in any application and the class can be used
directly or a custom class can be derived from it for a custom behaviour.

The typical use case is to create an instance of the `Logger` object,
then log messages at different levels:

```javascript
const mockConsole: MockConsole = new MockConsole()

const log = new Logger({
  level: 'info',
  console: mockConsole
})
```

### Reference

For more details on the available class definitions, including all methods,
accessors, properties, etc,
please see the TypeDoc
[reference pages](https://xpack.github.io/mock-console-ts).

## Known problems

- none

## Status

The `@xpack/mock-console` module is currently under development.

## Tests

The module is tested
with 100% coverage and CI tested on every push via GitHub
[Actions](https://github.com/xpack/mock-console-ts/actions).

## Compatibility notices

According to [semver](https://semver.org) rules:

> Major version X (X.y.z | X > 0) MUST be incremented if any
backwards incompatible changes are introduced to the public API.

### v1.0.0

The initial version, extracted from `logger-ts` and `cli-start-options-ts`.

## License

The original content is released under the
[MIT License](https://opensource.org/license/mit/),
with all rights reserved to
[Liviu Ionescu](https://github.com/ilg-ul).
