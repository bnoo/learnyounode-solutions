var lyn6 = require('./lyn6-mod');

lyn6(process.argv[2], process.argv[3], function(err, files) {
    files.forEach(function(file) {
	console.log(file)
    });
});
