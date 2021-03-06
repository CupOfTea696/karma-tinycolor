var path = require("path");

var pattern = function(file) {
	return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
	files.unshift(pattern(path.resolve(path.dirname(require.resolve("tinycolor2")), "tinycolor.js")));
};

framework.$inject = ["config.files"];
module.exports = {"framework:tinycolor": ["factory", framework]};
