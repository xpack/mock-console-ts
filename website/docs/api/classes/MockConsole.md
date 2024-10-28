# Class: MockConsole

The **MockConsole** class implements a
  Node.js [Console](https://nodejs.org/docs/latest-v16.x/api/console.html)
  that logs the messages to arrays.

## Remarks

During tests, it is necessary to check the output of various
commands, and for this it is necessary to intercept the console
output.

This is done by constructing the `Console` object with two writable streams
which store the output into local arrays of strings, one line at a
time.

If the messages contain `/n`, they are split into separate lines.

The line terminators are not stored in the arrays.

UTF-8 encodings are used for multi-character strings.

The arrays are available as public members (`outLines` for the
standard output and `errLines` for the standard error).

## Extends

- [`Console`](MockConsole.md#console)

## Constructors

### new MockConsole()

> **new MockConsole**(): [`MockConsole`](MockConsole.md)

Create a **MockConsole** instance.

#### Returns

[`MockConsole`](MockConsole.md)

#### Remarks

The constructor has no parameters.

It creates the two writable streams configured to decode `utf-8`
strings.

#### Example

```javascript
const mockConsole = new MockConsole()
```

#### Overrides

`Console.constructor`

#### Defined in

[src/lib/mock-console.ts:94](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L94)

## Properties

### outLines

> **outLines**: `string`[] = `[]`

Array of strings with the lines written on `stdout`.

#### Example

```javascript
t.ok(mockConsole.outLines.length > 0, 'has stdout')
t.match(mockConsole.outLines[1], 'Multiple subcommands', 'has title')
```

#### Defined in

[src/lib/mock-console.ts:66](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L66)

***

### errLines

> **errLines**: `string`[] = `[]`

Array of strings with the lines written on `stderr`.

#### Example

```javascript
t.equal(mockConsole.errLines.length, 0, 'stderr is empty')
```

#### Defined in

[src/lib/mock-console.ts:75](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L75)

***

### Console

> **Console**: `ConsoleConstructor`

#### Inherited from

`Console.Console`

#### Defined in

node\_modules/@types/node/console.d.ts:68

***

### outBuffer

> `protected` **outBuffer**: `string` = `''`

#### Defined in

[src/lib/mock-console.ts:77](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L77)

***

### errBuffer

> `protected` **errBuffer**: `string` = `''`

#### Defined in

[src/lib/mock-console.ts:78](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L78)

## Methods

### clear()

> **clear**(): `void`

Clear the console internal status

#### Returns

`void`

#### Remarks

Clear the content of the internal arrays and the content of the
parent **Console**.

#### Example

```javascript
mockConsole.clear()
```

#### Overrides

`Console.clear`

#### Defined in

[src/lib/mock-console.ts:194](https://github.com/xpack/mock-console-ts/blob/f3bd902a70e32ea770f263886b5ffd087ec7356b/src/lib/mock-console.ts#L194)

***

### assert()

> **assert**(`value`, `message`?, ...`optionalParams`?): `void`

`console.assert()` writes a message if `value` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) or omitted. It only
writes a message and does not otherwise affect execution. The output always
starts with `"Assertion failed"`. If provided, `message` is formatted using
[`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args).

If `value` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), nothing happens.

```js
console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();
// Assertion failed
```

#### Parameters

• **value**: `any`

The value tested for being truthy.

• **message?**: `string`

All arguments besides `value` are used as error message.

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.101

#### Inherited from

`Console.assert`

#### Defined in

node\_modules/@types/node/console.d.ts:90

***

### count()

> **count**(`label`?): `void`

Maintains an internal counter specific to `label` and outputs to `stdout` the
number of times `console.count()` has been called with the given `label`.

```js
> console.count()
default: 1
undefined
> console.count('default')
default: 2
undefined
> console.count('abc')
abc: 1
undefined
> console.count('xyz')
xyz: 1
undefined
> console.count('abc')
abc: 2
undefined
> console.count()
default: 3
undefined
>
```

#### Parameters

• **label?**: `string`

The display label for the counter.

#### Returns

`void`

#### Since

v8.3.0

#### Inherited from

`Console.count`

#### Defined in

node\_modules/@types/node/console.d.ts:130

***

### countReset()

> **countReset**(`label`?): `void`

Resets the internal counter specific to `label`.

```js
> console.count('abc');
abc: 1
undefined
> console.countReset('abc');
undefined
> console.count('abc');
abc: 1
undefined
>
```

#### Parameters

• **label?**: `string`

The display label for the counter.

#### Returns

`void`

#### Since

v8.3.0

#### Inherited from

`Console.countReset`

#### Defined in

node\_modules/@types/node/console.d.ts:148

***

### debug()

> **debug**(`message`?, ...`optionalParams`?): `void`

The `console.debug()` function is an alias for [log](MockConsole.md#log).

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v8.0.0

#### Inherited from

`Console.debug`

#### Defined in

node\_modules/@types/node/console.d.ts:153

***

### dir()

> **dir**(`obj`, `options`?): `void`

Uses [`util.inspect()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilinspectobject-options) on `obj` and prints the resulting string to `stdout`.
This function bypasses any custom `inspect()` function defined on `obj`.

#### Parameters

• **obj**: `any`

• **options?**: `InspectOptions`

#### Returns

`void`

#### Since

v0.1.101

#### Inherited from

`Console.dir`

#### Defined in

node\_modules/@types/node/console.d.ts:159

***

### dirxml()

> **dirxml**(...`data`): `void`

This method calls `console.log()` passing it the arguments received.
This method does not produce any XML formatting.

#### Parameters

• ...**data**: `any`[]

#### Returns

`void`

#### Since

v8.0.0

#### Inherited from

`Console.dirxml`

#### Defined in

node\_modules/@types/node/console.d.ts:165

***

### error()

> **error**(`message`?, ...`optionalParams`?): `void`

Prints to `stderr` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args)).

```js
const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
```

If formatting elements (e.g. `%d`) are not found in the first string then
[`util.inspect()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilinspectobject-options) is called on each argument and the
resulting string values are concatenated. See [`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args)
for more information.

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Inherited from

`Console.error`

#### Defined in

node\_modules/@types/node/console.d.ts:186

***

### group()

> **group**(...`label`): `void`

Increases indentation of subsequent lines by spaces for `groupIndentation` length.

If one or more `label`s are provided, those are printed first without the
additional indentation.

#### Parameters

• ...**label**: `any`[]

#### Returns

`void`

#### Since

v8.5.0

#### Inherited from

`Console.group`

#### Defined in

node\_modules/@types/node/console.d.ts:194

***

### groupCollapsed()

> **groupCollapsed**(...`label`): `void`

An alias for [group](MockConsole.md#group).

#### Parameters

• ...**label**: `any`[]

#### Returns

`void`

#### Since

v8.5.0

#### Inherited from

`Console.groupCollapsed`

#### Defined in

node\_modules/@types/node/console.d.ts:199

***

### groupEnd()

> **groupEnd**(): `void`

Decreases indentation of subsequent lines by spaces for `groupIndentation` length.

#### Returns

`void`

#### Since

v8.5.0

#### Inherited from

`Console.groupEnd`

#### Defined in

node\_modules/@types/node/console.d.ts:204

***

### info()

> **info**(`message`?, ...`optionalParams`?): `void`

The `console.info()` function is an alias for [log](MockConsole.md#log).

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Inherited from

`Console.info`

#### Defined in

node\_modules/@types/node/console.d.ts:209

***

### log()

> **log**(`message`?, ...`optionalParams`?): `void`

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args)).

```js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See [`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args) for more information.

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Inherited from

`Console.log`

#### Defined in

node\_modules/@types/node/console.d.ts:227

***

### table()

> **table**(`tabularData`, `properties`?): `void`

Try to construct a table with the columns of the properties of `tabularData` (or use `properties`) and rows of `tabularData` and log it. Falls back to just
logging the argument if it can't be parsed as tabular.

```js
// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘
```

#### Parameters

• **tabularData**: `any`

• **properties?**: readonly `string`[]

Alternate properties for constructing the table.

#### Returns

`void`

#### Since

v10.0.0

#### Inherited from

`Console.table`

#### Defined in

node\_modules/@types/node/console.d.ts:259

***

### time()

> **time**(`label`?): `void`

Starts a timer that can be used to compute the duration of an operation. Timers
are identified by a unique `label`. Use the same `label` when calling [timeEnd](MockConsole.md#timeend) to stop the timer and output the elapsed time in
suitable time units to `stdout`. For example, if the elapsed
time is 3869ms, `console.timeEnd()` displays "3.869s".

#### Parameters

• **label?**: `string`

#### Returns

`void`

#### Since

v0.1.104

#### Inherited from

`Console.time`

#### Defined in

node\_modules/@types/node/console.d.ts:268

***

### timeEnd()

> **timeEnd**(`label`?): `void`

Stops a timer that was previously started by calling [time](MockConsole.md#time) and
prints the result to `stdout`:

```js
console.time('bunch-of-stuff');
// Do a bunch of stuff.
console.timeEnd('bunch-of-stuff');
// Prints: bunch-of-stuff: 225.438ms
```

#### Parameters

• **label?**: `string`

#### Returns

`void`

#### Since

v0.1.104

#### Inherited from

`Console.timeEnd`

#### Defined in

node\_modules/@types/node/console.d.ts:282

***

### timeLog()

> **timeLog**(`label`?, ...`data`?): `void`

For a timer that was previously started by calling [time](MockConsole.md#time), prints
the elapsed time and other `data` arguments to `stdout`:

```js
console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints "process: 365.227ms 42".
doExpensiveProcess2(value);
console.timeEnd('process');
```

#### Parameters

• **label?**: `string`

• ...**data?**: `any`[]

#### Returns

`void`

#### Since

v10.7.0

#### Inherited from

`Console.timeLog`

#### Defined in

node\_modules/@types/node/console.d.ts:298

***

### trace()

> **trace**(`message`?, ...`optionalParams`?): `void`

Prints to `stderr` the string `'Trace: '`, followed by the [`util.format()`](https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args)
formatted message and stack trace to the current position in the code.

```js
console.trace('Show me');
// Prints: (stack trace will vary based on where trace is called)
//  Trace: Show me
//    at repl:2:9
//    at REPLServer.defaultEval (repl.js:248:27)
//    at bound (domain.js:287:14)
//    at REPLServer.runBound [as eval] (domain.js:300:12)
//    at REPLServer.<anonymous> (repl.js:412:12)
//    at emitOne (events.js:82:20)
//    at REPLServer.emit (events.js:169:7)
//    at REPLServer.Interface._onLine (readline.js:210:10)
//    at REPLServer.Interface._line (readline.js:549:8)
//    at REPLServer.Interface._ttyWrite (readline.js:826:14)
```

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.104

#### Inherited from

`Console.trace`

#### Defined in

node\_modules/@types/node/console.d.ts:320

***

### warn()

> **warn**(`message`?, ...`optionalParams`?): `void`

The `console.warn()` function is an alias for [error](MockConsole.md#error).

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Inherited from

`Console.warn`

#### Defined in

node\_modules/@types/node/console.d.ts:325

***

### profile()

> **profile**(`label`?): `void`

This method does not display anything unless used in the inspector. The `console.profile()`
method starts a JavaScript CPU profile with an optional label until [profileEnd](MockConsole.md#profileend)
is called. The profile is then added to the Profile panel of the inspector.

```js
console.profile('MyLabel');
// Some code
console.profileEnd('MyLabel');
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.
```

#### Parameters

• **label?**: `string`

#### Returns

`void`

#### Since

v8.0.0

#### Inherited from

`Console.profile`

#### Defined in

node\_modules/@types/node/console.d.ts:340

***

### profileEnd()

> **profileEnd**(`label`?): `void`

This method does not display anything unless used in the inspector. Stops the current
JavaScript CPU profiling session if one has been started and prints the report to the
Profiles panel of the inspector. See [profile](MockConsole.md#profile) for an example.

If this method is called without a label, the most recently started profile is stopped.

#### Parameters

• **label?**: `string`

#### Returns

`void`

#### Since

v8.0.0

#### Inherited from

`Console.profileEnd`

#### Defined in

node\_modules/@types/node/console.d.ts:349

***

### timeStamp()

> **timeStamp**(`label`?): `void`

This method does not display anything unless used in the inspector. The `console.timeStamp()`
method adds an event with the label `'label'` to the Timeline panel of the inspector.

#### Parameters

• **label?**: `string`

#### Returns

`void`

#### Since

v8.0.0

#### Inherited from

`Console.timeStamp`

#### Defined in

node\_modules/@types/node/console.d.ts:355
