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

/**
 * Test the utilities.
 */

// ----------------------------------------------------------------------------

// https://www.npmjs.com/package/tap
import { test } from 'tap'

// ----------------------------------------------------------------------------

import { MockConsole, dumpLines } from '../../src/index.js'

// ----------------------------------------------------------------------------

// Test the mock console.
await test('dumpLines', (t) => {
  const mockConsole = new MockConsole()

  t.equal(mockConsole.outLines.length, 0, 'outLines has no lines')

  // const globalConsole = console

  // Override the global console with the mock console.
  // eslint-disable-next-line no-global-assign
  console = mockConsole

  const array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten']
  dumpLines(array1)

  // globalConsole.log(mockConsole.outLines)

  t.equal(mockConsole.outLines.length, 12, 'outLines has 12 lines')
  t.equal(mockConsole.outLines[0], '', 'start with empty line')
  t.equal(mockConsole.outLines[1], '"zero", // 0', 'first line is zero')
  t.equal(mockConsole.outLines[11], '"ten", // 10', 'last line is ten')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.clear()

  const array2 = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven']
  dumpLines(array2)

  // globalConsole.log(mockConsole.outLines)

  t.equal(mockConsole.outLines.length, 13, 'outLines has 12 lines')
  t.equal(mockConsole.outLines[0], '', 'start with empty line')
  t.equal(mockConsole.outLines[1], '"Zero", // 0', 'first line is zero')
  t.equal(mockConsole.outLines[12], '"Eleven", // 11', 'last line is ten')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.clear()
  dumpLines()
  t.equal(mockConsole.outLines.length, 0, 'outLines has no lines')

  t.end()
})

// ----------------------------------------------------------------------------
