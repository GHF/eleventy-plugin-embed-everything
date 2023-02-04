const pattern = /<p>(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:)??(?:\/\/)??(?:open\.|www\.)??spotify\.com\/(?:user)??\/??(?:[0-9a-zA-Z]+)??\/??(?:playlist|track|album|artist|episode)\/[0-9a-zA-Z]{22}(?:[^\s<>]*)(?=(\s*))\3(?:<\/a>)??(?=(\s*))\4<\/p>/g;

module.exports = function(str) {
	return str.match(pattern);
};