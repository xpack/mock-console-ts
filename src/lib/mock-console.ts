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
 * A mock console that stores the lines into string arrays.
 */

// ----------------------------------------------------------------------------

import { strict as assert } from 'node:assert'

import { Console } from 'node:console'
import { Writable } from 'node:stream'

// ============================================================================

/** The type of a function to be used as callback. */
type WritableCallback = (error?: Error | null | undefined) => void

// https://nodejs.org/docs/latest-v16.x/api/console.html

/**
 * The **MockConsole** class extends a
 * Node.js [Console](https://nodejs.org/docs/latest-v16.x/api/console.html)
 * by capturing messages and storing them in internal arrays, rather
 * than sending them to an output device.
 *
 * Rationale: During testing, it is essential to verify the output of
 * various commands. To achieve this, the console output must be intercepted.
 *
 * This is accomplished by creating a `Console` object with two writable
 * streams that capture the output into local arrays of strings, one line
 * at a time.
 *
 * If the messages contain `/n`, they are split into separate lines.
 *
 * The line terminators are not stored in the arrays.
 *
 * UTF-8 encodings are used for multi-character strings.
 *
 * The arrays are available as public members (`outLines` for the
 * standard output and `errLines` for the standard error).
 */
export class MockConsole extends Console {
  /**
   * An array of strings containing the lines written to `stdout`.
   *
   * @example
   * ```javascript
   * t.ok(mockConsole.outLines.length > 0, 'has stdout')
   * t.match(mockConsole.outLines[1], 'Multiple subcommands', 'has title')
   * ```
   */
  public outLines: string[] = []
  /**
   * An array of strings containing the lines written to `stderr`.
   *
   * @example
   * ```javascript
   * t.equal(mockConsole.errLines.length, 0, 'stderr is empty')
   * ```
   */
  public errLines: string[] = []

  protected outBuffer = ''
  protected errBuffer = ''

  /**
   * Create a **MockConsole** instance.
   *
   * The constructor creates the two writable streams configured to decode
   * `utf-8` strings.
   *
   * @example
   * ```javascript
   * const mockConsole = new MockConsole()
   * ```
   */
  constructor () {
    // https://nodejs.org/docs/latest-v16.x/api/stream.html#simplified-construction
    const ostream = new Writable({
      // Content is encoded to Buffer with 'utf-8'.
      decodeStrings: true,
      defaultEncoding: 'utf-8',
      // construct: (callback: WritableCallback): void => {
      //   this.outLines = []
      //   this.outBuffer = ''
      //   callback()
      // },
      write: (
        chunk: Buffer,
        encoding: BufferEncoding,
        callback: WritableCallback
      ): void => {
        // console.log(chunk.toString('utf-8'))
        assert(encoding as string === 'buffer')
        this.outBuffer += chunk.toString('utf-8')

        // Split lines that include the line terminator.
        while (true) {
          const ix = this.outBuffer.indexOf('\n')
          if (ix === -1) {
            break
          }
          this.outLines.push(this.outBuffer.substring(0, ix))
          this.outBuffer = this.outBuffer.substring(ix + 1)
        }

        callback()
      }

      // Not invoked.
      // final: (callback: WritableCallback) => {
      //   if (this.outBuffer.length > 0) {
      //     this.outLines.push(this.outBuffer)
      //   }
      //   callback()
      // }
    })

    const errstream = new Writable({
      // Content is encoded to Buffer with 'utf-8'.
      decodeStrings: true,
      defaultEncoding: 'utf-8',
      // construct: (callback: WritableCallback):void => {
      //   this.errLines = []
      //   this.errBuffer = ''
      //   callback()
      // },
      write: (
        chunk: Buffer,
        encoding: BufferEncoding,
        callback: WritableCallback
      ): void => {
        // console.log(chunk.toString('utf-8'))
        assert(encoding as string === 'buffer')
        this.errBuffer += chunk.toString('utf-8')

        // Split lines that include the line terminator.
        while (true) {
          const ix = this.errBuffer.indexOf('\n')
          if (ix === -1) {
            break
          }
          this.errLines.push(this.errBuffer.substring(0, ix))
          this.errBuffer = this.errBuffer.substring(ix + 1)
        }

        callback()
      }

      // Not invoked.
      // final: (callback: WritableCallback) => {
      //   if (this.errBuffer.length > 0) {
      //     this.outLines.push(this.errBuffer)
      //   }
      //   callback()
      // }
    })

    super({
      stdout: ostream,
      stderr: errstream
    })
  }

  /**
   * Clear the content of the internal arrays and the content of the
   * parent **Console**.
   *
   * @example
   * ```javascript
   * mockConsole.clear()
   * ```
   */
  override clear (): void {
    super.clear()

    this.outLines = []
    this.outBuffer = ''

    this.errLines = []
    this.errBuffer = ''
  }
}

// ----------------------------------------------------------------------------
