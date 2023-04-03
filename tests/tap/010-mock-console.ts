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
 * Test the mock console.
 */

// ----------------------------------------------------------------------------

// The `[node-tap](http://www.node-tap.org)` framework.
import { test } from 'tap'

import { MockConsole } from '../../src/index.js'

// ----------------------------------------------------------------------------

// Test the mock console.
await test('mock console', (t) => {
  const mockConsole = new MockConsole()
  t.equal(mockConsole.outLines.length, 0, 'outLines is empty')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.log('output')
  t.equal(mockConsole.outLines.length, 1, 'outLines has one entry')
  t.equal(mockConsole.outLines[0], 'output', 'outLines is output')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.log('abc\n123')
  t.equal(mockConsole.outLines.length, 3, 'outLines has 3 entries')
  t.equal(mockConsole.outLines[1], 'abc', 'outLines is abc')
  t.equal(mockConsole.outLines[2], '123', 'outLines is 123')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  mockConsole.log('µ')
  t.equal(mockConsole.outLines.length, 4, 'outLines has 4 entries')
  t.equal(mockConsole.outLines[3], 'µ', 'outLines is micro')

  mockConsole.error('error')
  t.equal(mockConsole.errLines.length, 1, 'errLines has one entry')
  t.equal(mockConsole.errLines[0], 'error', 'errLines is error')

  mockConsole.error('def\n456')
  t.equal(mockConsole.errLines.length, 3, 'errLines has 3 entries')
  t.equal(mockConsole.errLines[1], 'def', 'errLines is def')
  t.equal(mockConsole.errLines[2], '456', 'errLines is 456')

  mockConsole.error('µ')
  t.equal(mockConsole.errLines.length, 4, 'errLines has 4 entries')
  t.equal(mockConsole.errLines[3], 'µ', 'errLines is micro')

  mockConsole.clear()
  t.equal(mockConsole.outLines.length, 0, 'outLines is empty')
  t.equal(mockConsole.errLines.length, 0, 'errLines is empty')

  t.end()
})

// ----------------------------------------------------------------------------
