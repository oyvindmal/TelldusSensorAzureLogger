var SensorParser = require("./TelldusSensorParser.js");
module.exports.SendData = function (data) {
    var dataObj;
    var firstSplit = data.split(":")
    if(firstSplit[3] !== undefined) {
          var typeSplit = firstSplit[3].split(";")[0];
    if(typeSplit == "sensor") {
        SensorParser.SendData(data);
    }
    
    else {
        console.log("Not sensor");
    }
 
    }
    
    else {
        console.log("Invalid data");
    }

}