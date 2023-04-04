/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2017 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/license/mit/.
 */

/* eslint max-len: [ "error", 80, { "ignoreUrls": true } ] */

// ----------------------------------------------------------------------------

/*
 * Utility functions.
 */

// ----------------------------------------------------------------------------

// import { strict as assert } from 'node:assert'

// ============================================================================

/**
 * @summary Dump numbered lines
 *
 * @param lines An array of strings.
 *
 * @description
 * Dump the content of the array, one line at a time, via `console.log()`.
 *
 * The lines are:
 * - prefixed with the line number, to help finding the index
 * to be used in the tests
 * - quoted, to make clear the line last character.
 *
 * @example
 *
 * ```
 * import { dumpLines } from '@xpack/mock-console'
 *
 * dumpLines(mockConsole.outLines)
 * dumpLines(mockConsole.errLines)
 * ```
 *
 * The output looks like:
 *
 * ```
 *  1: 'Multiple first'
 *  2: ''
 *  3: 'Usage: xtest multi first [options...] [--first <int>] [--multi <name>]'
 *  4: ''
 *  5: 'Multi first options:'
 *  6: '  --first <int>                          Multi first option (optional)'
 *  7: ''
 *  8: 'Multi options:'
 *  9: '  --multi|-m <name>                      Multi option (optional)'
 * 10: ''
 * 11: 'Common options:'
 * ```
 *
 */
export const dumpLines = (lines: string[]): void => {
  console.log()
  const scale = Math.ceil(Math.log10(lines.length))
  for (let i = 0; i < lines.length; ++i) {
    const paddedIndex: string = (i.toString()).padStart(scale, ' ')
    console.log(`${paddedIndex}: '${lines[i] as string}'`)
  }
}

// ----------------------------------------------------------------------------
