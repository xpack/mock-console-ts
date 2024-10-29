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
 * Dump lines from array to console.
 *
 * @param lines An array of strings.
 *
 * @remarks
 * For debugging purposes, dump the content of the array,
 * one line at a time, via `console.log()`.
 *
 * The lines are:
 * - preceded by an empty line
 * - suffixed with the line number, to help finding the index
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
 * ''
 * 'Multiple first' //  0
 * '' // 1
 * 'Usage: xtest multi first [options...] [--first <int>] [--multi <name>]' // 2
 * '' // 3
 * 'Multi first options:' // 4
 * '  --first <int>                          Multi first option (optional)' // 5
 * '' // 6
 * 'Multi options:' // 7
 * '  --multi|-m <name>                      Multi option (optional)' // 8
 * '' // 9
 * 'Common options:' // 10
 * ```
 *
 */
export const dumpLines = (lines?: string[]): void => {
  if (lines === undefined) {
    return
  }
  console.log() // Start with an empty line for better readability.

  for (let i = 0; i < lines.length; ++i) {
    console.log(`"${lines[i] as string}", // ${i.toString()}`)
  }
}

// ----------------------------------------------------------------------------
