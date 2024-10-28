# Function: dumpLines()

> **dumpLines**(`lines`?): `void`

Dump numbered lines

## Parameters

• **lines?**: `string`[]

An array of strings.

## Returns

`void`

## Remarks

Dump the content of the array, one line at a time, via `console.log()`.

The lines are:
- preceded by an empty line
- suffixed with the line number, to help finding the index
to be used in the tests
- quoted, to make clear the line last character.

## Example

```
import { dumpLines } from '@xpack/mock-console'

dumpLines(mockConsole.outLines)
dumpLines(mockConsole.errLines)
```

The output looks like:

```
''
'Multiple first' //  0
'' // 1
'Usage: xtest multi first [options...] [--first <int>] [--multi <name>]' // 2
'' // 3
'Multi first options:' // 4
'  --first <int>                          Multi first option (optional)' // 5
'' // 6
'Multi options:' // 7
'  --multi|-m <name>                      Multi option (optional)' // 8
'' // 9
'Common options:' // 10
```

## Defined in

[src/lib/utils.ts:67](https://github.com/xpack/mock-console-ts/blob/53337656c186a4e9906ef6647e14b62253c532c9/src/lib/utils.ts#L67)
