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

  // const globalConsole = console

  // Override the global console with the mock console.
  // eslint-disable-next-line no-global-assign
  console = mockConsole

  const array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten']
  dumpLines(array1)

  // globalConsole.log(mockConsole.outLines)

  t.equal(mockConsole.outLines.length, 11, 'outLines has 11 lines')
  t.equal(mockConsole.outLines[0], '', 'start with empty line')
  t.equal(mockConsole.outLines[1], '0: \'one\'', 'first line is one')
  t.equal(mockConsole.outLines[10], '9: \'ten\'', 'tenth line is ten')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.clear()

  const array2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven']
  dumpLines(array2)

  // globalConsole.log(mockConsole.outLines)

  t.equal(mockConsole.outLines.length, 12, 'outLines has 11 lines')
  t.equal(mockConsole.outLines[0], '', 'start with empty line')
  t.equal(mockConsole.outLines[1], ' 0: \'one\'', 'first line is one')
  t.equal(mockConsole.outLines[11], '10: \'eleven\'', 'eleventh line is eleven')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  t.end()
})

// ----------------------------------------------------------------------------
