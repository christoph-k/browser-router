/* global describe, it */

import { JSDOM } from 'jsdom'
import { BrowserRouter } from '../src/index.js'

const assert = require('assert')

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>')
dom.reconfigure({ url: 'http://localhost:8080/' })

global.document = dom.window.document
global.window = dom.window

const br = new BrowserRouter('root')

describe('path detection', () => {
  describe('when path not set', () => {
    it('should return "/"', () => {
      assert.strictEqual(br._path(), '/')
    })
  })
  describe('when path is set to "/#/foo"', () => {
    it('should return "/foo"', () => {
      dom.reconfigure({ url: 'http://localhost:8080/#/foo' })
      assert.strictEqual(br._path(), '/foo')
    })
  })
  describe('when path is set to "/#/foo?k=v"', () => {
    it('should return "/foo"', () => {
      dom.reconfigure({ url: 'http://localhost:8080/#/foo?k=v' })
      assert.strictEqual(br._path(), '/foo')
    })
  })
})
