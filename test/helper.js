const assert = require('chai').assert

assert.regexpEqual = function (a, b, ...args) {
  assert.equal(a.source, b.source, ...args)
}
