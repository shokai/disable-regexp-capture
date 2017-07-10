/* eslint-env mocha */

require('./helper')

const assert = require('chai').assert
const disableRegExpCapture = require('../')

describe('disableRegExpCapture', function () {
  it('disable RegExp Capture', function () {
    assert.regexpEqual(new RegExp(disableRegExpCapture(/(shokai)/))
                       , /(?:shokai)/)
    assert.regexpEqual(new RegExp(disableRegExpCapture(/^\[(shokai)\]$/))
                       , /^\[(?:shokai)\]$/)
  })

  it('disable multiple RegExpCapture', function () {
    assert.regexpEqual(
      new RegExp(disableRegExpCapture(/\[(https:\/\/.+.(jpe?g|gif|png))\]/))
      , /\[(?:https:\/\/.+.(?:jpe?g|gif|png))\]/)
    assert.regexpEqual(
      new RegExp(disableRegExpCapture(/^\[((projectName)\/(pageTitle))\]$/))
      , /^\[(?:(?:projectName)\/(?:pageTitle))\]$/)
  })

  it('do nothing if not capured', function () {
    assert.regexpEqual(new RegExp(disableRegExpCapture(/shokai/))
                       , /shokai/)
    assert.regexpEqual(new RegExp(disableRegExpCapture(/^\[shokai\]$/))
                       , /^\[shokai\]$/)
    assert.regexpEqual(new RegExp(disableRegExpCapture(/tail\(/))
                       , /tail\(/)
  })

  it('should not disable escaped ( )', function () {
    assert.regexpEqual(
      new RegExp(disableRegExpCapture(/^\[\(shokai\)\]$/))
      , /^\[\(shokai\)\]$/)
  })

  it('should not disable already disabled (?:', function () {
    assert.regexpEqual(
      new RegExp(disableRegExpCapture(/(?:shokai)/))
      , /(?:shokai)/
    )
  })
})
