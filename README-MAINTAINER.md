[![GitHub package.json version](https://img.shields.io/github/package-json/v/xpack/mock-console-ts)](https://github.com/xpack/mock-console-ts/blob/mater/package.json)
[![npm (scoped)](https://img.shields.io/npm/v/@xpack/mock-console.svg)](https://www.npmjs.com/package/@xpack/mock-console/)
[![license](https://img.shields.io/github/license/xpack/mock-console-ts.svg)](https://github.com/xpack/mock-console-ts/blob/xpack/LICENSE)
[![TS-Standard - TypeScript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard/)
[![CI on Push](https://github.com/xpack/mock-console-ts/actions/workflows/nodejs.yml/badge.svg)](https://github.com/xpack/mock-console-ts/actions/workflows/nodejs.yml)
[![GitHub issues](https://img.shields.io/github/issues/xpack/mock-console-ts.svg)](https://github.com/xpack/mock-console-ts/issues)
[![GitHub pulls](https://img.shields.io/github/issues-pr/xpack/mock-console-ts.svg)](https://github.com/xpack/mock-console-ts/pulls/)

# Maintainer & developer info

## Project repository

The project is hosted on GitHub:

- <https://github.com/xpack/mock-console-ts.git>

The project uses two branches:

- `master`, with the latest stable version (default)
- `develop`, with the current development version

To clone the `master` branch, use:

```sh
mkdir ${HOME}/Work/npm-modules && cd ${HOME}/Work/npm-modules
git clone \
https://github.com/xpack/mock-console-ts.git mock-console-ts.git
```

For development, to clone the `develop` branch, use:

```sh
git clone --branch develop \
https://github.com/xpack/mock-console-ts.git mock-console-ts.git
```

## Prerequisites

The prerequisites are:

- node >= 16.0.0
- npm

To ensure compatibility with older node, revert to an older one:

```sh
nvm use --lts 16
code
```

## Satisfy dependencies

```sh
npm install
```

## Add links for development

```sh
cd mock-console-ts.git
npm link
```

And in the projects referring it:

```sh
npm link @xpack/mock-console
```

## Start the compile background task

The TypeScript compiler can automatically recompile modified files. For
this, start it in `watch` mode.

```sh
npm run compile-watch
```

## Language standard compliance

The current version is TypeScript 4:

- <https://www.typescriptlang.org>
- <https://www.typescriptlang.org/docs/handbook>

The compiler is configured to produce `es2020` & `commonjs` files,
which means ECMAScript6 with legacy CommonJS modules, that can be imported
by any other project either via `require()` or `import`.

For more details on how to configure `tsconfig.json`, please see:

- [TSConfig](https://www.typescriptlang.org/tsconfig/)

## Standard style

As style, the project uses `ts-standard`, the TypeScript variant of
[Standard Style](https://standardjs.com/#typescript),
automatically checked at each commit via CI.

```js
// eslint-disable-next-line @typescript-eslint/no-xxx-yyy
```

The known rules are documented in the
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)
project.

Generally, to fit two editor windows side by side in a screen,
all files should limit the line length to 80.

```js
/* eslint max-len: [ "error", 80, { "ignoreUrls": true } ] */
```

Known and accepted exceptions:

- none

To manually fix compliance with the style guide (where possible):

```console
% npm run fix

> @xpack/mock-console@0.1.0 fix
> ts-standard --fix src && standard --fix test
...
```

## Documentation metadata

The documentation metadata uses the
[TypeDoc](https://typedoc.org/guides/doccomments/) tags, without
explicit types, since they are provided by TypeScript.

## Tests

The tests use the [`node-tap`](http://www.node-tap.org) framework
(_A Test-Anything-Protocol library for Node.js_, written by Isaac Schlueter).

Tests can be written in TypeScript, assuming `ts-node` is also installed
(<https://node-tap.org/docs/using-with/#using-tap-with-typescript>)

As for any `npm` package, the standard way to run the project tests is via
`npm run test`:

```sh
cd mock-console-ts.git
npm install
npm run test
```

A typical test result looks like:

```console
% npm run test-100-c8

> @xpack/mock-console@0.1.0 pretest-100-c8 /Users/ilg/My Files/WKS Projects/xpack.github/npm-modules/mock-console-ts.git
> npm run lint

> @xpack/mock-console@0.1.0 lint /Users/ilg/My Files/WKS Projects/xpack.github/npm-modules/mock-console-ts.git
> ts-standard src && standard esm

> @xpack/mock-console@0.1.0 test-100-c8 /Users/ilg/My Files/WKS Projects/xpack.github/npm-modules/mock-console-ts.git
> npm run test-tap-coverage-100-c8 -s

(node:32208) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
tests/tap/010-mock-console.ts ....................... 20/20
total ............................................... 20/20

  20 passing (2s)

  ok
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |
 src              |     100 |      100 |     100 |     100 |
  index.ts        |     100 |      100 |     100 |     100 |
 src/lib          |     100 |      100 |     100 |     100 |
  mock-console.ts |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------
```

To run a specific test with more verbose output, use `npm run tap`:

```console
% npm run tap tests/tap/010-mock-console.ts

> @xpack/mock-console@0.1.0 tap /Users/ilg/My Files/WKS Projects/xpack.github/npm-modules/mock-console-ts.git
> tap --reporter=spec "tests/tap/010-mock-console.ts"

(node:32644) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
tests/tap/010-mock-console.ts
  mock console
    ✓ outLines is empty
    ✓ errLines is empty
    ✓ outLines has one entry
    ✓ outLines is output
    ✓ errLines is empty
    ✓ outLines has 3 entries
    ✓ outLines is abc
    ✓ outLines is 123
    ✓ errLines is empty
    ✓ outLines has 4 entries
    ✓ outLines is micro
    ✓ errLines has one entry
    ✓ errLines is error
    ✓ errLines has 3 entries
    ✓ errLines is def
    ✓ errLines is 456
    ✓ errLines has 4 entries
    ✓ errLines is micro
    ✓ outLines is empty
    ✓ errLines is empty


  20 passing (1s)
```

### Coverage tests

Coverage tests are a good indication on how much of the source files is
exercised by the tests. Ideally all source files should be covered 100%,
for all 4 criteria (statements, branches, functions, lines).

Thus, passing coverage tests was enforced for all tests, as seen before.

#### Coverage exceptions

Exclusions are marked with `/* istanbul ignore next */` for
[istanbul](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md)
and `/* c8 ignore start */` `/* c8 ignore stop */` for
[c8](https://github.com/bcoe/c8).

- none

### Continuous Integration (CI)

The continuous integration tests are performed via GitHub
[Actions](https://github.com/xpack/mock-console-ts/actions) on Ubuntu,
Windows and macOS, using node 16, 18.

## Tricks & tips

To trace module resolution:

```json
    "compile": "tsc --traceResolution  -p ./",
```

## How to make new releases

### Release schedule

There are no fixed releases.

### Check Git

In the `xpack/mock-console-ts` Git repo:

- switch to the `develop` branch
- if needed, merge the `master` branch

No need to add a tag here, it'll be added when the release is created.

### Update npm packages

Notice: this package is also used by the VS Code extension and must be
kept as a legacy CommonJS dependency.

- `npm outdated`
- `npm update` or edit and `npm install`
- repeat and possibly manually edit `package.json` until everything is
  up to date
- commit the changes

Keep:

- [`@types/node`](https://www.npmjs.com/package/@types/node?activeTab=versions)
  locked to the oldest supported node (^16.18.14)
  [release](https://nodejs.org/download/release/) available for TypeScript.

### Determine the next version

As required by npm modules, this one also uses [semver](https://semver.org).

Determine the next version (like `0.1.0`),
and eventually update the
`package.json` file; the format is `0.1.0-pre`.

### Fix possible open issues

Check GitHub issues and pull requests:

- <https://github.com/xpack/mock-console-ts/issues/>

### Update `README-MAINTAINER.md`

Update the `README-MAINTAINER.md` file to reflect the changes
related to the new version.

## Update `CHANGELOG.md`

- check the latest commits `npm run git-log`
- open the `CHANGELOG.md` file
- check if all previous fixed issues are in
- add a line _* v0.1.0 released_
- commit with a message like _prepare v0.1.0_

## Prepare to publish

- terminate all running tasks (**Terminal** → **Terminate Task...**)
- select the `develop` branch
- commit everything
- `npm run fix`
- in the develop branch, commit all changes
- `npm run test`
- `npm run typedoc` and open the `docs/index.html` in a browser
- `npm run pack`; check the list of packaged files, possibly
  update `.npmignore`
- `npm version patch` (bug fixes), `npm version minor` (compatible API
  additions), `npm version major` (incompatible API changes)
- push all changes to GitHub;
- the `postversion` npm script should also update tags via
  `git push origin --tags`; this should trigger CI
- **wait for CI tests to complete**
- check <https://github.com/xpack/mock-console-ts/actions/>

## Publish to npmjs.com

- `npm publish --tag next` (use `--access public` when publishing for the first time)

Check if the version is present at
[@xpack/mock-console Versions](https://www.npmjs.com/package/@xpack/mock-console?activeTab=versions).

### Test

Test it with:

```bash
npm install -global @xpack/mock-console@next
```

### Merge into `master`

In this Git repo:

- select the `master` branch
- merge `develop`
- push all branches

### Close milestone

In <https://github.com/xpack/xpm-liquid-ts/milestones>:

- close the current milestone.

## Web site deployment

The documentation site is built with [TypeDoc](https://typedoc.org/) and
published in the project GitHub
[Pages](https://xpack.github.io/mock-console-ts).

The Web site deployment is performed automatically when pushing to the
master branch, by a dedicated workflow in GitHub
[Actions](https://github.com/xpack/mock-console-ts/actions/workflows/typedoc.yml).

### Tag the npm package as `latest`

When the release is considered stable, promote it as `latest`:

- `npm dist-tag ls @xpack/mock-console`
- `npm dist-tag add @xpack/mock-console@0.1.0 latest`
- `npm dist-tag ls @xpack/mock-console`

## Useful links

- <https://www.typescriptlang.org/docs/>
- <https://www.typescriptlang.org/tsconfig/>
- <https://typedoc.org>, <https://typedoc.org/guides/doccomments/>
- <https://tsdoc.org>
- <https://jsdoc.app/index.html>
- <https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1>
