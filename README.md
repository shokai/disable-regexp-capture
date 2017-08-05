# disable-regexp-capture

convert group to non-capturing group `(.+)` -> `(?:.+)`

- https://npmjs.com/package/disable-regexp-capture
- https://github.com/shokai/disable-regexp-capture

[![CircleCI](https://circleci.com/gh/shokai/disable-regexp-capture.svg?style=svg)](https://circleci.com/gh/shokai/disable-regexp-capture)


## Install

    $ npm install disable-regexp-capture -save


## Usage


```js
import disableRegexpCapture from 'disable-regexp-capture'

const disabledPattern = disableRegexpCapture(/\[([^[\]]+)\]/)
console.log(disabledPattern)
// => /\[(?:[^[\]]+)\]/
```


### Behavior of `String.prototype.split` with RegExp.

without capturing-group
```js
'aaa [tag1] bbb [tag2] ccc'.split(/\[[^[\]]+\]/)
// => [ 'aaa ', ' bbb ', ' ccc' ]
```

with capturing-group
```js
'aaa [tag1] bbb [tag2] ccc'.split(/\[([^[\]]+)\]/)
// => [ 'aaa ', 'tag1', ' bbb ', 'tag2', ' ccc' ]

'aaa [tag1] bbb [tag2] ccc'.split(/(\[[^[\]]+\])/)
// => [ 'aaa ', '[tag1]', ' bbb ', '[tag2]', ' ccc' ]
```

with nested capturing-group
```js
'aaa [tag1] bbb [tag2] ccc'.split(/(\[([^[\]]+)\])/)
// => [ 'aaa ', '[tag1]', 'tag1', ' bbb ', '[tag2]', 'tag2', ' ccc' ]
```

non-capturing-group in capturing-group
```js
'aaa [tag1] bbb [tag2] ccc'.split(/(\[(?:[^[\]]+)\])/)
// => [ 'aaa ', '[tag1]', ' bbb ', '[tag2]', ' ccc' ]
```