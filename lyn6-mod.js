var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extname, callback) {
    fs.readdir(dirname, function(err, files) {
	if (err) return callback(err);
	goodFiles = files.filter(function(file) {
	    return path.extname(file) == ".".concat(extname);
	});
	callback(null, goodFiles);
    });
};
