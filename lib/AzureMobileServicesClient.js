var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));


module.exports.HelloWorld = function () {
 console.log("Hello world! " + config.AzureMobile.ApiKey);
};

module.exports.SendData = function (object, table){

};