const pattern = /<p>(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:)??(?:\/\/)??(?:w{3}\.)??(?:twitch\.tv)\/([^\s<>]+?)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5<\/p>/g;

module.exports = function(str) {
  return str.match(pattern);
}