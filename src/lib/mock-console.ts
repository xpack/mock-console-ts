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
 * A mock console that stores the lines into string arrays.
 */

// ----------------------------------------------------------------------------

import { strict as assert } from 'node:assert'

import { Console } from 'node:console'
import { Writable } from 'node:stream'

// ============================================================================

type WritableCallback = (error?: Error | null | undefined) => void

// https://nodejs.org/docs/latest-v16.x/api/console.html

export class MockConsole extends Console {
  public outLines: string[] = []
  public errLines: string[] = []

  protected outBuffer = ''
  protected errBuffer = ''

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
        // console.log(chunk.toString(encoding))
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
        // console.log(chunk.toString(encoding))
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

  override clear (): void {
    super.clear()

    this.outLines = []
    this.outBuffer = ''

    this.errLines = []
    this.errBuffer = ''
  }
}

// ----------------------------------------------------------------------------
