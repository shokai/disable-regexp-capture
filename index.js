// disable "capture" in RegExp
// replace (~~) with (?:~~)
module.exports = function (regexp) {
  return regexp
    .source
    .replace(/\(\((?!\?)/g, function (leftParenthesis) {
      return leftParenthesis + '?:'
    })
    .replace(/(^|[^\\])\((?!\?)/g, function (leftParenthesis) {
      return leftParenthesis + '?:'
    })
}
