// const disableRegexpCapture = require('disable-regexp-capture')
const disableRegexpCapture = require('../')

const pattern = /\[([^[\]]+)\]/
const src = 'aaa [tag1] bbb [tag2] ccc'

console.log('source:', src)
console.log('split simple:', src.split(pattern))

const wrapCapture = (regexp) => new RegExp('(' + regexp + ')', regexp.flags)

const nodes = src.split(wrapCapture(disableRegexpCapture(pattern)))
console.log('split with disabled regexp:', nodes)

for (let node of nodes) {
  if (pattern.test(node)) {
    const [, tag] = node.match(pattern)
    console.log('tag:', tag)
  }
}
