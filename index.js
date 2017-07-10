// disable "capture" in RegExp
// replace (~~) with (?:~~)
module.exports = function (regexp) {
  return regexp
    .source
    .replace(/\(\((?!\?)/g, function (bracket) {
      return bracket + '?:'
    })
    .replace(/(^|[^\\])\((?!\?)/g, function (bracket) {
      return bracket + '?:'
    })
}
