# Function: dumpLines()

> **dumpLines**(`lines`?: `string`[]): `void`

Dump lines from array to console.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lines`? | `string`[] | An array of strings. |

## Returns

`void`

## Remarks

For debugging purposes, dump the content of the array,
one line at a time, via `console.log()`.

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

[utils.ts:68](https://github.com/xpack/mock-console-ts/blob/3ae34f73f082b8088102422f160123b40779ff74/src/lib/utils.ts#L68)
