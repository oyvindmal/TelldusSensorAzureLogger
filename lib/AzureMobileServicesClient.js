var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));


module.exports.HelloWorld = function () {
 console.log("Hello world! " + obj.someVal );
}