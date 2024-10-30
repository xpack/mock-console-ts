# Class: MockConsole

The **MockConsole** class extends a
Node.js [Console](https://nodejs.org/docs/latest-v16.x/api/console.html)
by capturing messages and storing them in internal arrays, rather
than sending them to an output device.

Rationale: During testing, it is essential to verify the output of
various commands. To achieve this, the console output must be intercepted.

This is accomplished by creating a `Console` object with two writable
streams that capture the output into local arrays of strings, one line
at a time.

If the messages contain `/n`, they are split into separate lines.

The line terminators are not stored in the arrays.

UTF-8 encodings are used for multi-character strings.

The arrays are available as public members (`outLines` for the
standard output and `errLines` for the standard error).

## Extends

- `Console`

## Constructors

### new MockConsole()

> **new MockConsole**(): [`MockConsole`](MockConsole.md)

Create a **MockConsole** instance.

The constructor creates the two writable streams configured to decode
`utf-8` strings.

#### Example

```javascript
const mockConsole = new MockConsole()
```

#### Returns

[`MockConsole`](MockConsole.md)

#### Overrides

`Console.constructor`

#### Defined in

[mock-console.ts:91](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L91)

## Properties

### outLines

> **outLines**: `string`[] = `[]`

An array of strings containing the lines written to `stdout`.

#### Example

```javascript
t.ok(mockConsole.outLines.length > 0, 'has stdout')
t.match(mockConsole.outLines[1], 'Multiple subcommands', 'has title')
```

#### Defined in

[mock-console.ts:66](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L66)

***

### errLines

> **errLines**: `string`[] = `[]`

An array of strings containing the lines written to `stderr`.

#### Example

```javascript
t.equal(mockConsole.errLines.length, 0, 'stderr is empty')
```

#### Defined in

[mock-console.ts:75](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L75)

***

### outBuffer

> `protected` **outBuffer**: `string` = `''`

#### Defined in

[mock-console.ts:77](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L77)

***

### errBuffer

> `protected` **errBuffer**: `string` = `''`

#### Defined in

[mock-console.ts:78](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L78)

## Methods

### clear()

> **clear**(): `void`

Clear the content of the internal arrays and the content of the
parent **Console**.

#### Example

```javascript
mockConsole.clear()
```

#### Returns

`void`

#### Overrides

`Console.clear`

#### Defined in

[mock-console.ts:188](https://github.com/xpack/mock-console-ts/blob/3235262f8d80c25d0044a43ac705c2642b84520c/src/lib/mock-console.ts#L188)
